import { SearchBar } from './Search';
import { RestaurantList } from './ResList';
import { TopRated } from './TopRated';
import { Shimmer } from './Shimmer';
import { useState, useEffect } from 'react';
import { swiggy_api } from '../utils/constant';
import { filterRestaurantsByRating, searchRes } from '../utils/utilFunctions';
import axios from 'axios';
import _ from 'lodash';

export const Body = () => {
	/**
	 * local state variables- super powerfull react varibales
	 * Never use state variables outside the component
	 * Never use state variables inside conditions/loops/functions
	 * */
	const [originalData, setOriginalData] = useState([]);
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchText, setSearchText] = useState('');

	/**
	 * If no dependency array is provided, the effect will run on every render.
	 * if dependency array is empty, the effect will run only once on initial render.
	 * if dependency array is provided, the effect will run on initial render and on every render if any of the dependencies change.
	 */

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(swiggy_api);
				const resPath =
					'data.cards[1].card.card.gridElements.infoWithStyle.restaurants';
				const restaurantData = _.get(response.data, resPath, []);
				setOriginalData(restaurantData);
				setRestaurants(restaurantData);
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleSearch = (text) => {
		setSearchText(text);
		if (text.trim() === '') {
			setRestaurants(originalData);
		} else {
			const filteredRestaurants = searchRes(originalData, text);
			setRestaurants(filteredRestaurants);
		}
	};

	return (
		<div className="body">
			<div className="body-ribbon">
				<TopRated
					filterTopRated={() =>
						setRestaurants(filterRestaurantsByRating(originalData, 4.0))
					}
				/>
				<SearchBar searchText={searchText} onSearchChange={handleSearch} />
			</div>
			{isLoading ? <Shimmer /> : <RestaurantList restaurants={restaurants} />}
		</div>
	);
};
