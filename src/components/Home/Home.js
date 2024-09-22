import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "./Profile";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home">
        <div className="nav">
          <Navbar />
        </div>
        <div className="body">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Home;
