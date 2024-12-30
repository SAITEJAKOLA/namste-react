import { SearchBar } from './Search';
import { RestaurantList } from './ResList';
import { TopRated } from './TopRated';
import { Shimmer } from './Shimmer';
import { useState, useEffect } from 'react';
import { swiggy_api } from '../utils/constant';
import { filterRestaurantsByRating, searchRes } from '../utils/utilFunctions';
import axios from 'axios';
import _ from 'lodash';

const useFetchRestaurants = (apiUrl) => {
	const [originalData, setOriginalData] = useState([]);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(apiUrl);
				const resPath =
					'data.cards[1].card.card.gridElements.infoWithStyle.restaurants';
				const restaurants = _.get(response.data, resPath, []);
				setOriginalData(restaurants);
				setData(restaurants);
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [apiUrl]);

	return { data, isLoading, setData, originalData };
};

export const Body = () => {
	const {
		data: restaurants,
		isLoading,
		setData: setRestaurants,
		originalData,
	} = useFetchRestaurants(swiggy_api);
	const [searchText, setSearchText] = useState('');

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
