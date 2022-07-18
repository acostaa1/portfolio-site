import React from 'react';
import './menu.scss';
// import {Menu} from "@mui/icons-material"

export default function Menu({ menuOpen, setMenuOpen }) {
  
  return (
    <div className={'side-menu ' + (menuOpen && 'active')}>
      <ul onClick={()=> setMenuOpen(!menuOpen)}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
