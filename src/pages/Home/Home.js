import React from "react";
import "./Home.css";

function Home() {
  const [state] = React.useState({
    heading:
      "Babu Banarasi Das University: Courses, Fee, Placements, Scholarships.",
    paragraph:
      " Babu Banarasi Das University, Lucknow is a Private University located in the capital city of Lucknow of the state Uttar Pradesh. The Institute was established in 2010 by Akhilesh Das. BBD University is fully recognized by the AICTE, New Delhi and also got NAAC accreditation.",
  });

  return (
    <div className="main">
      <div className="contant">
        <div className="left">
          <h1>
            {state.heading} <span>Admission 2025</span>
          </h1>
          <p>{state.paragraph}</p>
          <button>Read More</button>
        </div>
        <div className="right">
          <img src="/image/image3.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
