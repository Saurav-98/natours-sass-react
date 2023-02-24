import React from "react";

import { BsHeart, BsMap, BsGlobe2, BsCompass } from "react-icons/bs";

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__container-box">
          <BsGlobe2 className="features__container-box-icon" />
          <h3 className="heading-tertiar u-margin-bottom-sm">
            Explore the world
          </h3>
          <p className="features__container-box-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            dolore?
          </p>
        </div>
        <div className="features__container-box">
          <BsCompass className="features__container-box-icon" />
          <h3 className="heading-tertiar u-margin-bottom-sm">Meet Nature</h3>
          <p className="features__container-box-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            dolore?
          </p>
        </div>
        <div className="features__container-box">
          <BsMap className="features__container-box-icon" />
          <h3 className="heading-tertiar u-margin-bottom-sm">Find your way</h3>
          <p className="features__container-box-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            dolore?
          </p>
        </div>
        <div className="features__container-box">
          <BsHeart className="features__container-box-icon" />
          <h3 className="heading-tertiar u-margin-bottom-sm">
            Live a healthier life
          </h3>
          <p className="features__container-box-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            dolore?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
