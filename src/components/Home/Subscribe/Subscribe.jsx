import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="sub">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2>
              Hurry up! Subscribe our newsletter
              <br /> and get 25% Off
            </h2>
          </div>
          <div className="col-md-12 col-lg-12">
            Limited time offer for this month. No credit card required.
          </div>
          {/* <div className="col-md-12 col-lg-12"> */}
            <form>
              <input type={"email"} placeholder={"Email Address here"} />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Subscribe;
