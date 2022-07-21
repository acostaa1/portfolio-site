import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="profile-pic">
          <img src="portfolio_logos/angel-profile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hey, I'm</h2>
          <h1> Angel Acosta</h1>
          <h3> Fullstack Software Engineer</h3>
          <a href="#about">
            <img src="portfolio_logos/arrow-down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
