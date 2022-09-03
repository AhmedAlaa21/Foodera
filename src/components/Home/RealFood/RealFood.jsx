import React from "react";
import "./RealFood.css";

const RealFood = () => {
  return (
    <section className="real-food">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="http://demo.tutsflow.com/foodera/images/features/1.png"
              alt="salad"
            />
          </div>
          <div className="col-md-6">
            <h2>
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <button>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealFood;
