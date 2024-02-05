import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav__link ${menuOpen ? "open" : ""}`} id="list">
        <li>
          <a href="#Reservation" className="nav__a">
            Reservation
          </a>
        </li>

        <li>
          <a href="#Services" className="nav__a">
            Services
          </a>
        </li>
        <li>
          <a href="#Testimonial" className="nav__a">
            Testimonial
          </a>
        </li>
        <li>
          <a href="#login" className="nav__a">
            Login
          </a>
        </li>

        <li>
          <a href="#FAQ" className="nav__a">
            FAQ
          </a>
        </li>
      </ul>
      <img src={Logo} alt="Logo" className="logo" />
    </nav>
  );
};

export default Navbar;
