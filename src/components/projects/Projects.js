// import React from "react";
import Navbar from "../Navbar/Navbar";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "../../helpers/projectList";
import "./project.css";
export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h2> My Personal Projects</h2>
        <div className="projectList">
          {ProjectList.map((project) => {
            return (
              <ProjectItem
                url={project.url}
                name={project.name}
                image={project.image}
                skills={project.skills}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
