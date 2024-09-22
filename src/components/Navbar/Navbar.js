<<<<<<< HEAD
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link className="name" to="/">
        <h3>Shiva Karthik Rallabandi</h3>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars size={20} style={{ color: "#FFF" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#FFF" }} />
        )}
      </div>
    </div>
  );
}
=======
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link className="name" to="/">
        <h3>Shiva Karthik Rallabandi</h3>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars size={20} style={{ color: "#FFF" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#FFF" }} />
        )}
      </div>
    </div>
  );
}
>>>>>>> b4a6f63830a956d2b52b8a83bbd8117089997b54
