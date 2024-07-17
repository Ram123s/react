import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing_page_3.css';
import laptop from '../device-pile-in.png';

const Landing_page_3 = () => {
  return (
    <div className="watch-everywhere">
      <div className="container">
        <div className="row align-items-center text-center text-md-left">
          <div className="col-md-6 Ram">
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="col-md-6">
            <img src={laptop} alt="Devices" className="device img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_page_3;
