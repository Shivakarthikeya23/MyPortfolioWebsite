import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icons">
                <a href="https://www.facebook.com/shivakarthikeya23">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://github.com/Shivakarthikeya23">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.instagram.com/shivakarthikeya.sk/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/shivakarthik-rallabandi-006a701a5/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/sh1vakarthikeya">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm
                <span className="highlighted-text"> Shiva Karthik</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Software Developer 👨‍💻",
                      1000,
                      "Full stack Developer 🌐",
                      1000,
                      "Android Developer 📱",
                      1000,
                      "Java/Python Developer 🐍 ",
                      1000,
                    ]}
                  />
                </h1>
              </span>
              <span className="profile-role-tagline">
                Ready to build the applications with frontend and backend
                operations
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn"> Hire me </button>
              <a
                href="shivakarthik_rallabandi.pdf"
                download="shivakarthik_rallabandi.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </>
  );
}
