<<<<<<< HEAD
import React from "react";

function ProjectItem({ image, name, url, skills }) {
  //   const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        window.open(url);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p> {skills} </p>
    </div>
  );
}

export default ProjectItem;
=======
import React from "react";

function ProjectItem({ image, name, url, skills }) {
  //   const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        window.open(url);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p> {skills} </p>
    </div>
  );
}

export default ProjectItem;
>>>>>>> b4a6f63830a956d2b52b8a83bbd8117089997b54
