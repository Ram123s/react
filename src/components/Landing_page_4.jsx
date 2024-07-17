import React from "react";
import "./Landing_page_4.css";
import tomy from "../tomy.png";

const Landing_page_4 = () => {
  return (
    <div className="outlet">
      <div className="container">
        <div className="row align-items-center text-center text-md-left">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={tomy} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 Raj">
            <h1>Create profiles for kids</h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_page_4;
