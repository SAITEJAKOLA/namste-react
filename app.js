import React from 'react';
import ReactDOM from 'react-dom/client';
import apiData from './resturant_db/res.json';
const mediaURL = 'https://media-assets.swiggy.com/swiggy/image/upload/';
/**
 * Header
 * - Logo
 * - Nav Items
 * - Cart
 * Body
 * - Search
 * - RestaurantList
 *      - RestaurantCard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * */

/**
 * Header Component
 */
const Header = () => (
  <div className='header'>
    <Logo />
    <NavItems items={['Home', 'About', 'Contact', 'Cart']} />
  </div>
);

const Logo = () => (
  <div className='logo-container'>
    <img
      className='logo'
      src={`${mediaURL}fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png`}
      alt='App Logo'
    />
  </div>
);

const NavItems = ({ items }) => (
  <div className='nav-items'>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

/**
 * Body Component
 */
const Body = () => (
  <div className='body'>
    <SearchBar />
    <RestaurantList restaurants={apiData.restaurants} />
  </div>
);

const SearchBar = () => <div className='search'>Search</div>;

const RestaurantList = ({ restaurants }) => (
  <div className='res-container'>
    {restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.info.id} restaurant={restaurant.info} />
    ))}
  </div>
);

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = restaurant;

  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={`${mediaURL}fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

/**
 * AppLayout Component
 */
const AppLayout = () => (
  <div className='app'>
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
