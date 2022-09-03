import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <Carousel>
              <Carousel.Item>
                <img
                  src="http://demo.tutsflow.com/foodera/images/testimonials/1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries"
                  </p>
                  <span>Simab Dave - Web Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="http://demo.tutsflow.com/foodera/images/testimonials/2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries"
                  </p>

                  <span>Jonathan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
