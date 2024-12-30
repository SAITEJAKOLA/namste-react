export const filterRestaurantsByRating = (restaurants, minRating) =>
	restaurants.filter((res) => res.info.avgRating > minRating);

export const searchRes = (restaurants, searchText) => {
	return restaurants.filter(
		(res) =>
			res.info.name &&
			res.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
	);
};
