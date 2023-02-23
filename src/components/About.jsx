import React from "react";
import Nat1 from "../assets/nat-1-large.jpg";
import Nat2 from "../assets/nat-2-large.jpg";
import Nat3 from "../assets/nat-3-large.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="u-center-text u-margin-bottom-lg">
        <h2 className="heading-secondary u-animate-Effect">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="about__grid">
        <div className="about__grid-text-box">
          <h3 className="heading-tertiary u-margin-bottom-sm">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            molestiae dignissimos non expedita quis illo possimus natus eos,
            quibusdam debitis asperiores fuga? Quis fuga id impedit praesentium
            adipisci provident sunt.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-sm">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius
            illo blanditiis, voluptas beatae tempore. Eos optio cupiditate dicta
            consectetur, perspiciatis odio dolorum omnis minus, quas saepe,
            voluptatem vero ea?
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="about__grid-img-box">
          <div className="composition">
            <img
              src={Nat1}
              alt="Natours Photo 1"
              className="composition__photo composition__photo-1"
            />
            <img
              src={Nat2}
              alt="Natours Photo 2"
              className="composition__photo composition__photo-2"
            />
            <img
              src={Nat3}
              alt="Natours Photo 3"
              className="composition__photo composition__photo-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
