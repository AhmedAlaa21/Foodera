import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 icons">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-youtube" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-pinterest" aria-hidden="true"></i>
          </div>
          <div className="col-md-12 col-lg-12 features">
            <p>Register</p>
            <p>Affiliate</p>
            <p>Forum</p>
            <p>FAQ</p>
          </div>

          <div className="col-md-12 col-lg-12">
            <p>&copy; 2021.Foodera.All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
