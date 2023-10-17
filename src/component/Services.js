import React from "react";
import { AiFillBank, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaUserGraduate, FaGlobe, FaBriefcase } from "react-icons/fa";
const Services = () => {
  return (
    <div class="container">
      <div class="navbar">
        <p></p>
        <h1>Vision of Genesis & Founder</h1>
        <p></p>
      </div>
      <div class="navbar-part2">
        <div className="founder">
          <div className="founder-list">
            <img src="/image/babuji-120x120.jpg" alt="" />
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
          {/* <p>To provide an open opportunity to the young generation for evolving their core competencies and to build their career as world class professionals with broad based foundation, in-depth knowledge & versatile personality to meet the challenges of Global Economy.</p> */}
          <div className="founder-list">
            <img src="/image/dr_akhilesh_das_gupta-120x120.jpg" alt="" />
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
          {/* <p>We not only make technocrats at BBD, we churn out citizens of the world, perfect in all respect, be it leadership, competence, confidence, communication, moral or knowledge.</p> */}
        </div>
      </div>
      <div className="services">
        <div className="services-list">
          <div className="icons">
            <h1>
              <AiOutlineUsergroupAdd />
            </h1>
            <h3>1000+</h3>
            <p></p>
            <h4>Companies</h4>
          </div>
          <div className="icons">
            <h1>
              <FaUserGraduate />
            </h1>
            <h3>1000+</h3>
            <p></p>
            <h4>Companies</h4>
          </div>
          <div className="icons">
            <h1>
              {" "}
              <AiFillBank />
            </h1>
            <h3>1000+</h3>
            <p></p>
            <h4>Companies</h4>
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
            <h3>1000+</h3>
            <p></p>
            <h4>Companies</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
