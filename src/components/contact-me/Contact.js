import React from 'react';
import './contact.scss';
import { contactInfo } from '../../contactInfo';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <h2>Lets Connect! Feel free to reach out to me via any of the below. </h2>
      <div className="container">
        {contactInfo.map((item) => (
          <div key = {item.id} className="item">
            <a target="_blank" rel="noreferrer" href={item.link}>
              <img src={item.img} alt="" />{' '}
            </a>
          </div>
        ))}
      </div>
      <div className="arrow">
        <a href="#home">
          <img src="portfolio_logos/arrow-down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
