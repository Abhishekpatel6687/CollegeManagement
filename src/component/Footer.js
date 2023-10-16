import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaGlobeAfrica,
  FaTwitter
} from "react-icons/fa";
import {IoHome} from 'react-icons/io5';
import {HiOutlineBuildingOffice2} from 'react-icons/hi2';
import {MdCall, MdOutlineMailOutline } from 'react-icons/md';
import {TfiPrinter} from 'react-icons/tfi';

const Footer = () => {
  return (
    <div className="footer">
      <div className="section_1">
        <div className="logo">
          <img src="/image/logo-removebg-preview.png" alt="logo_footer" />
        </div>
        <div className="icons">
          
        </div>
      </div>
      <div className="section_2">
        <div className="icon-list">
            <ul>
                <li><HiOutlineBuildingOffice2/>Babu Banarasi Das University</li>
                <li><IoHome/>BBD City, Faizabad Road, Lucknow Uttar Pradesh - 226 028 India</li>
                <li><MdCall/>0-(522)-6196300/301/302</li>
                <li><MdCall/>0-(522)-6196315/16/17/18</li>
                <li><TfiPrinter/>0-(522)-6196222</li>        
                <li><MdOutlineMailOutline/>info@bbdu.org</li>        
                <li><FaGlobeAfrica/>https://bbdu.ac.in</li>
            </ul>
        </div>
        <div className="courses">
        <ul>
            <li><FaLinkedinIn/></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaFacebookF /></li>
            <li><FaTelegram  /></li>
            <li><FaYoutube   /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
