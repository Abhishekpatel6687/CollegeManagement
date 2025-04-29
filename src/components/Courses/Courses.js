import React from "react";
import "./Courses.css";
import { courses } from "../../data/courses";

const Courses = () => {
  return (
    <div className="courses-section">
      <h2 className="courses-heading">Courses We Offer</h2>
      <p className="courses-subtext">
        At BBD University, we offer a diverse range of undergraduate and postgraduate programs
        designed to shape future leaders. Explore our departments and find the path that's right for you.
      </p>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <ul className="course-list">
              {course.programs.map((program, idx) => (
                <li key={idx}>{program}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;