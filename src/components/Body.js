import { SearchBar } from './Search';
import { RestaurantList } from './ResList';
import { TopRated } from './TopRated';
import { Shimmer } from './Shimmer';
import { useState, useEffect } from 'react';
import { swiggy_api } from '../utils/constant';
import axios from 'axios';
import _ from 'lodash';
/**
 * Body Component
 */
export const Body = () => {
	//Local State Variable
	// const [restaurants, setRestaurants] = useState([]);
	//Normal js variable
	//let resturants;
	const [filterRestaurants, setFilterRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchRes = async () => {
			try {
				const response = await axios.get(swiggy_api);
				// console.log("Raw API Response:", response);

				const resJson = response.data;
				const resPath =
					'data.cards[1].card.card.gridElements.infoWithStyle.restaurants';
				const restaurants_api = _.get(resJson, resPath);

				// console.log("Extracted Restaurants:", restaurants_api);

				setFilterRestaurants(restaurants_api || []);
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRes();
	}, []); // Dependency array ensures this runs only once on mount

	const handleTopRated = () => {
		const filteredRes = filterRestaurants.filter(
			(res) => res.info.avgRating > 4
		);
		setFilterRestaurants(filteredRes);
	};
	return (
		<div className="body">
			<TopRated filterTopRated={handleTopRated} />
			<SearchBar />
			{isLoading ? (
				<Shimmer />
			) : (
				<RestaurantList restaurants={filterRestaurants} />
			)}
		</div>
	);
};
