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
              type="application/pdf"
              href="Angel_Acosta_Dev_Resume_2022.pdf"
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
