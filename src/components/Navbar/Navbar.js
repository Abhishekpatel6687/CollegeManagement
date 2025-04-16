import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const nav = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 4, name: "Placement" },
    { id: 5, name: "Contact" },
  ];
  const [isShowMenus, setIsShowMenus] = useState(false);

  function update() {
    setIsShowMenus(!isShowMenus);
  }

  return (
    <div>
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
    </div>
  );
};

export default Navbar;
