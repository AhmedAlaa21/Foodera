import React from "react";
import "./Numbers.css";

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>1287+</h2>
            <h6>Savings</h6>
          </div>
          <div className="col-md-3">
            <h2>5786+</h2>
            <h6>Photos</h6>
          </div>
          <div className="col-md-3">
            <h2>1440+</h2>
            <h6>Rockets</h6>
          </div>
          <div className="col-md-3">
            <h2>7110+</h2>
            <h6>Globes</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
