
import React from "react";
import "./Placements.css";
import { recruitersImage } from "../../data/recruitersImage";
import { students } from "../../data/placementData";


const Placements = () => {
  return (
    <section className="placement-hero">
      <div className="placement-content">
      <h2 className="placement-title">
          Top Recruiters & Student Placements
        </h2>
        <p className="placement-desc">
          Our students are hired by some of the top companies globally. Check out our esteemed recruiters and the students they hired. Here's a glimpse of some of our students who have been placed with top companies.
        </p>

        <div className="recruiter-grid">
          {recruitersImage.map((logo, index) => (
            <div className="recruiter-glass-card" key={index}>
              <img src={logo.img} alt="Recruiter Logo" />
            </div>
          ))}
        </div>
        <div className="placement-highlights">
         <div className="highlight-card">
           <h3>200+ Recruiters</h3>
         </div>
         <div className="highlight-card">
           <h3>₹25 LPA Highest Package</h3>
         </div>
         <div className="highlight-card">
           <h3>95% Placement Rate</h3>
         </div>
       </div>

        <div className="student-cards">
          {students.map((student, index) => (
            <div className="student-card" key={index}>
              <div className="student-image">
                <img src={student.image} alt={`${student.name}`} />
              </div>
              <h3>{student.name}</h3>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Company:</strong> {student.company}</p>
              <p><strong>Salary:</strong> {student.salary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placements;