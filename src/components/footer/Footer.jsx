import React from "react";
import './Footer.scss';
import { Link } from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <hr className="--color-dark" />
      <footer className="footer container">
        <div className="contact">
          <div>
            <h4>Contact Information</h4>
            <address>Computer Village Ikeja, Lagos State.</address>
            <p>info@remight.com</p>
            <p>+234 7036323097</p>
            <span><AiOutlineTwitter/></span>
          </div>
          <div>
            <h4>Site Links</h4>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/team'>Our Team</Link>
            <Link to='/createOrder'>Requst for Quote</Link>
          </div>
        </div>
        <hr className="--color-dark" />

        <p>Built by <a href="mailto:devremight@gmail.com">Devremight</a> © 2023</p>
      </footer>
      
    </>
  );
};

export default Footer;
