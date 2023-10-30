import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
const nav = [
  { id: 1, name: "About" },
  { id: 2, name: "Admissions" },
  { id: 3, name: "Career" },
  { id: 4, name: "Placements" },
  { id: 5, name: "Account" },
  { id: 6, name: "Contact" },
];

function Header() {
  const [state] = React.useState({
    heading:
      "Babu Banarasi Das University: Courses, Fee, Placements,Scholarships",
    paragraph:
      " Babu Banarasi Das University, Lucknow is a Private University located in the capital city of Lucknow of the state Uttar Pradesh. The Institute was established in 2010 by Akhilesh Das. BBD University is fully recognized by the AICTE, New Delhi and also got NAAC accreditation.",
  });

  const [isShowMenus, setIsShowMenus] = useState(false);

  function update() {
    setIsShowMenus(!isShowMenus);
  }

  return (
    <div className="main">
      <div className="nav">
        <img src="/image/bbd-logo-3.png" alt="" />
        <div className="nav-part2">
          {nav.map((nav) => (
            <h4>{nav.name}</h4>
          ))}

          <button>Sign In</button>

          <div className="icon">
            <i className="iconImg" onClick={() => update()}>
              <FaAlignRight />
            </i>

            {isShowMenus && (
              <div className="inerIcon">
                {nav.map((item, index) => {
                  return <div key={item.id}> {item.name}</div>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contant">
        <div className="left">
          <h1>
            {state.heading} <span>Admission 2023</span>
          </h1>
          <p>{state.paragraph}</p>
          <button>React More</button>
        </div>
        <div className="right">
          <img src="/image/image3.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
