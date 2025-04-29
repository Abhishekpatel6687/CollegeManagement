import React from "react";
import "./Home.css";
import { recruitersImage } from "../../data/recruitersImage";
import About from "../About/About";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import Contact from "../Contact/Contact";
import Placements from "../../components/placements/Placements";

function Home() {
  const [state] = React.useState({
    heading:
      "Babu Banarasi Das University: Courses, Fee, Placements, Scholarships.",
    paragraph:
      "Babu Banarasi Das University, Lucknow is a Private University located in the capital city of Lucknow of the state Uttar Pradesh. The Institute was established in 2010 by Akhilesh Das. BBD University is fully recognized by the AICTE, New Delhi and also got NAAC accreditation.",
  });

  return (
    <div className="main">
      <div className="contant">
        <div className="contentImage">
          <div className="left">
            <h1>
              {state.heading} <span>Admission 2025</span>
            </h1>
            <p>{state.paragraph}</p>
            <button>Read More</button>
          </div>
          <div className="right">
            <img src="/image/image3.jpg" alt="BBDU Campus" />
          </div>
        </div>

        <div className="recruiters">
          <h1>Our Top Recruiters</h1>
          <div className="sliderWrapper">
            <div className="recruitersImage">
              {recruitersImage.concat(recruitersImage).map((item, index) => (
                <div className="imageBox" key={index}>
                  <img src={item.img} alt={`Recruiter ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <Placements />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
