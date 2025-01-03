import React from 'react';

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Customer Support</h3>
            <p>24/7 Available</p>
            <p>📞 1800-123-4567</p>
            <p>✉️ support@foodapp.com</p>
          </div>

          <div className="info-card">
            <h3>Restaurant Partnership</h3>
            <p>Join our platform</p>
            <p>📞 1800-999-8888</p>
            <p>✉️ partner@foodapp.com</p>
          </div>

          <div className="info-card">
            <h3>Delivery Partner</h3>
            <p>Become a delivery partner</p>
            <p>📞 1800-777-6666</p>
            <p>✉️ careers@foodapp.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <select>
                <option value="">Select Topic</option>
                <option value="support">General Support</option>
                <option value="partnership">Restaurant Partnership</option>
                <option value="delivery">Delivery Related</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
