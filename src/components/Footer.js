import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="contact-details">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:wingreads7@gmail.com">wingreads7@gmail.com</a></p>
        <p>Phone: +91 96000 47065</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61558866942443&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/wingreads7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
