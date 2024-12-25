import React from 'react';
import ReactDOM from 'react-dom/client';
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

const Header = () =>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://cdn.dribbble.com/users/7004524/screenshots/15197928/media/40944f27c2dcfaf14038f387b4e88c2d.jpg'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>   
            </div>
        </div>
    )
}

const RestuarantCard = ()=>{
    return (
        <div className ='res-card'>
            <img className='res-logo' src={require('./image_db/Babai.jpeg')} />
        </div>
    )
}
const Body = ()=>{
    return (
        <div className = 'body'>
            <div className='search'> Search</div>
            <div className = 'res-container'> 
                <RestuarantCard/>
                </div>
        </div>
    )
}
const AppLayout = ()=>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
