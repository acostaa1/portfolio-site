import React from 'react';
import './nav.scss';
// import {Menu} from "@mui/icons-material"

export default function Nav({menuOpen, setMenuOpen}) {
  return (
    <div className={"nav " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            {`< A A / >`}
            {/* <img src= "public/portfolio_logos/angel-logo-2.png" alt="logo"></img> */}
          </a>
        </div>
        <div className="right">
          <div className="menu" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
