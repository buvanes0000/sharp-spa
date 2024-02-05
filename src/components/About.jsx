import React from "react";
import "./about.scss";
import AboutImage from "../assets/logo.png";

const About = () => {
  return (
    <article className="spa-container" id="About">
      <section className="spa-introduction">
        <div className="spa-info">
          <img src={AboutImage} alt="Sharp Spa Logo" className="spa-logo" />
          <div className="text">
            <h2>
              Welcome to <span>Sharp</span> Spa
            </h2>
            <h5>
              Your Destination for Natural Wellness & <span>Relaxation</span>
            </h5>

            <div className="about__content">
              <p>
                Welcome to Sharp Spa! Immerse yourself in natural wellness with
                our curated treatments and products. From relaxing massages to
                skin-loving goodies, we've got your well-being covered. Come for
                a chill time, leave refreshed. See you at Sharp Spa! 🌿✨
              </p>
            </div>

            <div className="spa-actions">
              <a href="#book" className="book-now">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
