import { RestaurantCard } from './ResCard';
import { Link } from 'react-router-dom';
/* Always pass a key to a map function if not react rerenders all the elements 
Never use index as a key and it is not a good practice to use index as a key
restaurants.map((restaurant, index) => (
      <RestaurantCard key={index} restaurant={restaurant.info}/>
    ))}

*/
export const RestaurantList = ({ restaurants }) => (
	<div className="res-container">
		{restaurants.map((restaurant) => (
			<Link to={`/resturant/${restaurant.info.id}`} key={restaurant.info.id}>
				<RestaurantCard key={restaurant.info.id} restaurant={restaurant.info} />
			</Link>
		))}
	</div>
);
