import React from "react";
import { Link } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";
import Navbar from "../Navbar/Navbar";
import "./About.css";
function About() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="body">
        <div className="about">
          <ul className="aboutlist">
            <li>
              <Link to="/About/Education">Education</Link>
            </li>
            <li>
              <Link to="/About/Work">Work</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;