export const filterRestaurantsByRating = (restaurants, minRating) =>
	restaurants.filter((res) => res.info.avgRating > minRating);
