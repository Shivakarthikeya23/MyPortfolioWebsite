<<<<<<< HEAD
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
=======
import React from "react";
import { Link } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";
import Navbar from "../Navbar/Navbar";
import "./About.css";
function About() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default About;
>>>>>>> b4a6f63830a956d2b52b8a83bbd8117089997b54
