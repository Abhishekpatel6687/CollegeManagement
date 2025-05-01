import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isShowMenus, setIsShowMenus] = useState(false);
  const [active, setActive] = useState("Home");

  const nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Courses", link: "/courses" },
    { id: 4, name: "Placements", link: "/placements" },
    { id: 5, name: "Services", link: "/services" },
    { id: 6, name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    navigate("/");
  }, []);

  const toggleMenu = () => {
    setIsShowMenus(!isShowMenus);
  };

  return (
    <div className="nav">
      <Link to="/" onClick={() => setActive("Home")}>
        <img src="/image/bbd-logo-3.png" alt="Logo" className="logo-img" />
      </Link>

      <div className="nav-part2">
        {nav.map((navItem) => (
          <h4 key={navItem.id}>
            <Link
              to={navItem.link}
              onClick={() => setActive(navItem.name)}
              className="linkItems"
              style={{ color: active === navItem.name ? "#610593" : "white" }}
            >
              {navItem.name}
            </Link>
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
                  <Link
                    to={item.link}
                    onClick={() => {
                      setIsShowMenus(false);
                      setActive(item.name);
                    }}
                    style={{ color: active === item.name ? "#610593" : "white" }}
                    className="linkItems"
                  >
                    {item.name}
                  </Link>
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
