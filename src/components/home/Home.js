import React, { useEffect, useRef } from 'react';
import './home.scss';
import { init } from 'ityped';

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      loop: false,

      strings: [
        'Software Engineer',
        'Poker Player',
        'Cat Dad',
        'Software Engineer',
      ],
    });
  }, []);
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="profile-pic">
          <img src="portfolio_logos/angel-profile-pic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hello 👋🏽 ! I'm </h2>
          <h1> Angel Acosta</h1>
          <h3>
            NYC Based <span ref={textRef}> </span>
          </h3>
        </div>
      </div>
      <a href="#about">
        <img src="portfolio_logos/arrow-down.png" alt="" />
      </a>
    </div>
  );
}
