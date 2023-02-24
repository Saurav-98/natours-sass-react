import React from "react";

const Tours = () => {
  return (
    <section className="tours">
      <div className="u-center-text u-margin-bottom-lg">
        <h2 className="heading-secondary u-animate-Effect">
          Most popular tours
        </h2>
      </div>

      <div className="tours__grid">
        <div className="tours__grid-element">
          <div className="card">
            <div className="card__side card__side--front">Front Text</div>
            <div className="card__side card__side--back card__side--back-1">
              Back Text
            </div>
          </div>
        </div>
        <div className="tours__grid-element">Item 2</div>
        <div className="tours__grid-element">Item 3</div>
      </div>
    </section>
  );
};

export default Tours;
