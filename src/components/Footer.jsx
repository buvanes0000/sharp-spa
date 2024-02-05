import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="facebook" className="icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="twitter" className="icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="instagram" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-content">
        <p>Spa Opening Hours: Monday-Saturday 9:00 AM - 6:00 PM</p>
        <p>&copy; 2024 Sharp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
