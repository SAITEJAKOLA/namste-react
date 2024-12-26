import { SearchBar } from "./Search";
import { RestaurantList } from "./ResList";
import { apiData } from "../resturant_db/res";
/**
 * Body Component
 */
export const Body = () => {
  console.log("Api Data", apiData);
  const restaurants = apiData?.restaurants || [];
  return (
    <div className="body">
      <SearchBar />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};
