import React from "react";
import logoWhite from "../assets/logo-white.png";

const Hero = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <img src={logoWhite} alt="natours logo" className="header__logo" />
      </div>

      <main className="header__main-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--secondary">
            is where life happens
          </span>
        </h1>
        <a href="#" className="btn btn--primary btn--animation">
          Discover our tours
        </a>
      </main>
    </div>
  );
};

export default Hero;
