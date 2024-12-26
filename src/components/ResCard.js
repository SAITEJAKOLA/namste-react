import { mediaURL } from "../utils/constant";
export const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    restaurant;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${mediaURL}fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};
