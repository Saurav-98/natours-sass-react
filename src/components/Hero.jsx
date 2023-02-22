import React from "react";
import "./Hero.css";
import logoWhite from "../assets/logo-white.png";

const Hero = () => {
  return (
    <header className="header">
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
          Explore our tours
        </a>
      </main>
    </header>
  );
};

export default Hero;
