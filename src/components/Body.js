import { SearchBar } from './Search';
import { RestaurantList } from './ResList';
import { TopRated } from './TopRated';
import { Shimmer } from './Shimmer';
import { useState, useEffect } from 'react';
import { swiggy_api } from '../utils/constant';
import { filterRestaurantsByRating } from '../utils/utilFunctions';
import axios from 'axios';
import _ from 'lodash';

const useFetchRestaurants = (apiUrl) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(apiUrl);
				const resPath =
					'data.cards[1].card.card.gridElements.infoWithStyle.restaurants';
				const restaurants = _.get(response.data, resPath, []);
				setData(restaurants);
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [apiUrl]);

	return { data, isLoading, setData };
};

export const Body = () => {
	const {
		data: restaurants,
		isLoading,
		setData: setRestaurants,
	} = useFetchRestaurants(swiggy_api);

	const handleTopRated = () => {
		const topRated = filterRestaurantsByRating(restaurants, 4.3);
		setRestaurants(topRated);
	};

	return (
		<div className="body">
			<TopRated filterTopRated={handleTopRated} />
			<SearchBar />
			{isLoading ? <Shimmer /> : <RestaurantList restaurants={restaurants} />}
		</div>
	);
};
