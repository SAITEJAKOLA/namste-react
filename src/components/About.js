import React from 'react';

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Bringing Your Favorite Food To Your Doorstep</h1>
        <p>Serving millions of happy customers since 2023</p>
      </div>
      
      <div className="about-sections">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>To deliver exceptional food experiences right to your doorstep, connecting you with the best restaurants in your city.</p>
        </div>

        <div className="features-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Lightning Fast Delivery</h3>
              <p>Average delivery time of 30 minutes</p>
            </div>
            <div className="feature">
              <h3>Live Tracking</h3>
              <p>Real-time updates on your order status</p>
            </div>
            <div className="feature">
              <h3>Top Restaurants</h3>
              <p>Partnered with 1000+ premium restaurants</p>
            </div>
            <div className="feature">
              <h3>Best Offers</h3>
              <p>Regular deals and discounts</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat">
            <h2>1M+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h2>500+</h2>
            <p>Cities</p>
          </div>
          <div className="stat">
            <h2>10K+</h2>
            <p>Delivery Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};
