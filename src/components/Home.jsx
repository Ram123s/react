import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="hero">
    
      <h1>Unlimited movies, TV shows and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="email-form">
        <input type="email" placeholder="Email address" />
        <button>Get Started &gt;</button>
      </div>
    </div>
  );
};

export default Home;
