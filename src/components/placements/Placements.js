
import React from "react";
import "./Placements.css";

import accenture from "../../assets/recruitersImages/accenture.jpg";
import amazon from "../../assets/recruitersImages/amazon.jpg";
import berger from "../../assets/recruitersImages/berger.jpg";
import capgemini from "../../assets/recruitersImages/capgemini.jpg";
import daffodil from "../../assets/recruitersImages/daffodil.jpg";
import genpact from "../../assets/recruitersImages/genpact.jpg";
import godrej from "../../assets/recruitersImages/godrej.jpg";
import ibm from "../../assets/recruitersImages/ibm.jpg";
import iciciBank from "../../assets/recruitersImages/icici-bank.jpg";
import infosis from "../../assets/recruitersImages/infosis.jpg";
import tcs from "../../assets/recruitersImages/tcs.jpg";
import techMahindra from "../../assets/recruitersImages/tech-mahindra.jpg";
import wiproo from "../../assets/recruitersImages/wiproo.jpg";
import zomato from "../../assets/recruitersImages/zomato.jpg";

import abhinav from "../../assets/abhinav.webp";
import yogita from "../../assets/yogita.jpg";
import jack from "../../assets/jack.jpg";
import pooja from "../../assets/pooja.jpg";
import rohit from "../../assets/rohit.webp";
import amita from "../../assets/amita.webp";
import tamir from "../../assets/tamir.jpg";
import saurabh from "../../assets/saurabh.webp";

const students = [
  {
    name: "Ravi Singh",
    image: abhinav,
    course: "B.Tech - Computer Science",
    company: "Amazon",
    salary: "₹18,00,000",
  },
  {
    name: "Pooja Yadav",
    image: pooja,
    course: "MBA - Marketing",
    company: "Accenture",
    salary: "₹12,00,000",
  },
  {
    name: "Yogita Patel",
    image: yogita,
    course: "M.Tech - Mechanical Engineering",
    company: "Capgemini",
    salary: "₹10,50,000",
  },
  {
    name: "Tamir Alam",
    image:tamir,
    course: "BBA - Business Administration",
    company: "IBM",
    salary: "₹8,50,000",
  },
  {
    name: "Rohit Kumar",
    image:rohit,
    course: "BBA - Business Administration",
    company: "IBM",
    salary: "₹8,50,000",
  },
  {
    name: "Amita Verma",
    image: amita,
    course: "M.Tech - Mechanical Engineering",
    company: "Capgemini",
    salary: "₹10,50,000",
  },
  {
    name: "Jack Smith",
    image: jack,
    course: "B.Tech - Electronics",
    company: "TCS",
    salary: "₹7,50,000",
  },
  {
    name: "Saurabh",
    image:saurabh,
    course: "MBA - Human Resources",
    company: "Wipro",
    salary: "₹9,00,000",
  },
];

const recruiters = [
  accenture, amazon, berger, capgemini, daffodil, genpact, godrej,
  ibm, iciciBank, infosis, tcs, techMahindra, wiproo, zomato,
];



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
          {recruiters.map((logo, index) => (
            <div className="recruiter-glass-card" key={index}>
              <img src={logo} alt="Recruiter Logo" />
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