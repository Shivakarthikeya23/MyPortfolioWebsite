import "./App.css";
import Project from "./components/projects/Projects";
import Contact from "./components/ContactMe/Contact";
// import About from "./components/AboutMe/About";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Education from "./components/AboutMe/Education";
import Work from "./components/AboutMe/Work";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<Education />} />
        <Route path="/About/Education" element={<Education />} />
        <Route path="/About/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
