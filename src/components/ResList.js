import { RestaurantCard } from "./ResCard";
/* Always pass a key to a map function if not react rerenders all the elements 
Never use index as a key and it is not a good practice to use index as a key
restaurants.map((restaurant, index) => (
      <RestaurantCard key={index} restaurant={restaurant.info}/>
    ))}

*/
export const RestaurantList = ({ restaurants }) => (
  <div className="res-container">
    {restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.info.id} restaurant={restaurant.info} />
    ))}
  </div>
);
