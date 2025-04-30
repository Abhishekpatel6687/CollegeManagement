import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isShowMenus, setIsShowMenus] = useState(false);
  const [active, setActive] = useState('Home')

  const nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Courses", link: "/courses" },
    { id: 4, name: "Placements", link: "/placements" },
    { id: 5, name: "Services", link: "/services" },
    { id: 6, name: "Contact", link: "/contact" },
  ];

  function toggleMenu() {
    setIsShowMenus(!isShowMenus);
  }

  return (
    <div className="nav">
      <img src="/image/bbd-logo-3.png" alt="Logo" />
      <div className="nav-part2">
        {nav.map((navItem) => (
          <h4 key={navItem.id}>
            <Link  onClick={() => setActive(navItem.name)}  style={{ color: active === navItem.name ? '#610593' : 'white' }} className="linkItems"  to={navItem.link}>{navItem.name}</Link>
          </h4>
        ))}

        <button>Sign In</button>

        <div className="icon">
          <i className="iconImg" onClick={toggleMenu}>
            <FaAlignRight />
          </i>

          {isShowMenus && (
            <div className="inerIcon">
              {nav.map((item) => (
                <div key={item.id}>
                  <Link onClick={() => setIsShowMenus(false)} className="linkItems" to={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
