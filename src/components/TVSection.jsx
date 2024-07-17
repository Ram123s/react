import React from 'react';
import './TVSection.css';  // Import the CSS file

const TVSection = () => {
  return (
    <div className="tv-section">
      <div className="tv-content">
        <h1>Enjoy on your TV</h1>
        <p>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
        </p>
      </div>
      <div className="tv-image-container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="TV showing Netflix interface"
          className="tv-image"
        />
      </div>
    </div>
  );
};

export default TVSection;
