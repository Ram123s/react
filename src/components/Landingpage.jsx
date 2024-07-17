import React from 'react';
import './Landingpage.css';

const Landingpage = () => {
  return (
    <div className="App">
      <div className="content">
        <div className="phone">
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt="Phone with downloading screen" className="phone-image" />
          <div className="download-status">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="Stranger Things" className="thumbnail" />
            <div className="text">
              <p>Stranger Things</p>
              <p className="downloading">Downloading...</p>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
