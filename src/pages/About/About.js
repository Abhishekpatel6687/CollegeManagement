import React from "react";
import { AiFillBank, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaUserGraduate, FaGlobe, FaBriefcase } from "react-icons/fa";
import "./About.css";
import bgImage from "../../assets/image/2018-02-07-3.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="navbar">
        <p></p>
        <h2>Vision of Genesis & Founder</h2>
        <p></p>
      </div>
      <div className="navbar-part2">
        <div className="founder">
          <div className="founder-list">
            <img
              src="/image/babuji-120x120.jpg"
              alt="Late Babu Banarasi Das Ji"
            />
            <ul className="list">
              <li>
                <span>Late Babu Banarasi Das Ji</span>
              </li>
              <li> (1912 – 1985)</li>
              <li> Genesis</li>
              <li> Ex Chief Minister</li>
              <li> Govt. of Uttar Pradesh</li>
            </ul>
          </div>
          <div className="founder-list">
            <img
              src="/image/dr_akhilesh_das_gupta-120x120.jpg"
              alt="Dr. Akhilesh Das Gupta"
            />
            <ul className="list">
              <li>
                <span>Late Dr. Akhilesh Das Gupta</span>
              </li>
              <li>Founders</li>
              <li>MBA, LLB, Ph.D.</li>
              <li>Ex-Member of Parliament (Rajya Sabha)</li>
              <li>Hon’ble Founder Chairman, BBD Group</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="services">
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="services-list"
        >
          <div className="icons">
            <h1>
              <AiOutlineUsergroupAdd />
            </h1>
            <h3>20000+</h3>
            <p></p>
            <h4>Students</h4>
          </div>
          <div className="icons">
            <h1>
              <AiFillBank />
            </h1>
            <h3>18 Years</h3>
            <p></p>
            <h4>Experience</h4>
          </div>
          <div className="icons">
            <h1>
              <FaUserGraduate />
            </h1>
            <h3>20000+</h3>
            <p></p>
            <h4>Scholarships Given</h4>
          </div>
          <div className="icons">
            <h1>
              <FaBriefcase />
            </h1>
            <h3>1000+</h3>
            <p></p>
            <h4>Companies</h4>
          </div>
          <div className="icons">
            <h1>
              <FaGlobe />
            </h1>
            <h3>14 Tie Ups</h3>
            <p></p>
            <h4>International</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
