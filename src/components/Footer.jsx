import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 onClick={scrollToTop} className="footer-logo">Clay & Cuisine Cafe</h3>
            <p className="footer-tagline">Where artisan food meets creative clay art</p>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/p/Clay-cuisine-cafe-61574879348219/" aria-label="Facebook" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/clay_and_cuisine_cafe_/?hl=en" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@c3____" aria-label="TikTok" className="social-link">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; Clay &amp; Cuisine Cafe. Since 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;