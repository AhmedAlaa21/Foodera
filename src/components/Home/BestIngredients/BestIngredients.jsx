import React from "react";
import "./BestIngredients.css";

const BestIngredients = () => {
  return (
    <section className="best-ingredients">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>
              We make everything by hand with the best possible ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="info">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p>Etiam sed dolor ac diam volutpat.</p>
            </div>
            <div className="info">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p>Erat volutpat aliquet imperdiet.</p>
            </div>
            <div className="info">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p>purus a odio finibus bibendum</p> .
            </div>
            <button>
              Learn More
            </button>
          </div>
          <div className="col-md-6">
            <img
              src="http://demo.tutsflow.com/foodera/images/features/2.png"
              alt="Ingredients"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestIngredients;
