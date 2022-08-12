import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="container">
        <div className="item">
          <h2>Thank you for stopping by!</h2>
          <div className="content">
            <p>
              My coding journey began at a Tech-Stars Start-Up Weekend in NYC
              when I pitched an idea to help everyday folks maximize their
              credit card points and see how their friends were leveraging
              their points. During this event I realized how powerful software
              engineering is. Being able to create something from scratch with
              a team over a short period of time was truly an amazing feeling--
              winning second place also felt great! After attempting to build
              out my own curriculum to learn how to code, I decided to pursue a
              certificate at Fullstack Academy.
            </p>
            <br></br>
            <p>
              Professionally, I have over 5 years experience working in
              Financial Services, specifically in corporate goverance and
              regulatory affairs. I am interested in continuing to explore
              technologies that shape financial markets, including Blockchain.
            </p>
            <br></br>
            <p>
              When I'm not at my computer clacking away, you can find me reading
              a book, probably something by Michael Lewis or Ben Mezrich,
              playing with our cat, Cleo, or trying to find a seat at poker table. (I'm
              also currently watching{' '}
              <span className="italic">Better Call Saul</span>).
            </p>
            <br></br>
          </div>
        </div>
      </div>
      <a href="#skills">
        <img src="portfolio_logos/arrow-down.png" alt="" />
      </a>
    </div>
  );
}
