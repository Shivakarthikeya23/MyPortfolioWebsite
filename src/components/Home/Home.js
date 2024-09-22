<<<<<<< HEAD
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
=======
import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "./Profile";
function Home() {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}

export default Home;
>>>>>>> b4a6f63830a956d2b52b8a83bbd8117089997b54
