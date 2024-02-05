import React from "react";
import "./hero.scss";
import image1 from "../assets/womensketch.jpg";
import image2 from "../assets/art.png";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__content">
          <h1>Sharp</h1>
          <h2>Stay Refreshed, Stay Sharp</h2>
        </div>

        <div className="hero__images">
          <img className="girl" src={image1} alt="girl" />
          <img src={image2} className="art" alt="paint" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
