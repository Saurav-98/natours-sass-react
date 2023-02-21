import React from "react";
import "./Hero.css";
import logoWhite from "../assets/logo-white.png";

const Hero = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoWhite} alt="natours logo" className="logo" />
      </div>

      <main className="main-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-secondary">
            is where life happens
          </span>
        </h1>
      </main>
    </header>
  );
};

export default Hero;
