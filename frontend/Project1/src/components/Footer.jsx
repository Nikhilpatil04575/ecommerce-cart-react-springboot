import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>NIKE</h2>
        <p>shop quality product with us.</p>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Nike Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
