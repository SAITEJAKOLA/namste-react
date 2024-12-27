import { SearchBar } from "./Search";
import { RestaurantList } from "./ResList";
import { TopRated } from "./TopRated";
import { apiData } from "../resturant_db/res";
import { useState } from "react";
/**
 * Body Component
 */
export const Body = () => {
  //Local State Variable
  // const [restaurants, setRestaurants] = useState([]);
  //Normal js variable
  //let resturants;
  console.log("Api Data", apiData);
  const restaurants = apiData?.restaurants || [];
  const [filterRestaurants, setFilterRestaurants] = useState(restaurants);

  const handleTopRated = () => {
    const filteredRes = restaurants.filter((res) => res.info.avgRating > 4);
    setFilterRestaurants(filteredRes);
  };
  return (
    <div className="body">
      <TopRated filterTopRated={handleTopRated} />
      <SearchBar />
      <RestaurantList restaurants={filterRestaurants} />
    </div>
  );
};
