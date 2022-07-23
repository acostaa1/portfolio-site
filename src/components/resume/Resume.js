import React from 'react';
import './resume.scss';

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <h1>Resume</h1>
      <div className="container">
        <div className="item">
          <div className="content">
            <h2>Check out my resume below!</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/16kTzg-LyKGCNxaDyIED2SVRn-tFKjzKQ/view?usp=sharing"
            >{`export default const PDF`}</a>
          </div>
        </div>
      </div>
      <a href="#contact">
        <img src="portfolio_logos/arrow-down.png" alt="" />
      </a>
    </div>
  );
}
