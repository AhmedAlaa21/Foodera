import React from "react";
import Data from "../../../data/Data";
import "./ExploreFood.css";

const ExploreFood = () => {
  const cardItem = Data.map((item) => {
    return (
      <div className="col-md-4" key={item.id}>
        <div className="box" >
          <img src={item.img} alt="food" />
          <h5>{item.title}</h5>
          <span>
            Time: {item.time} | Serves: {item.servesNum}
          </span>
          <h6>${item.price}</h6>
          <h6 className="old-price">
            <del>${item.oldPrice}</del>
          </h6>
        </div>
        <button>Order Now</button>
      </div>
    );
  });

  return (
    <section className="explore-food">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h1>Explore Our Food</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet <br /> leo. Mauris
              feugiat erat tellus. Far far away, behind the word mountains, far
              from the countries Vokalia and <br /> Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove.
            </p>
            <div className="row">{cardItem}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreFood;
