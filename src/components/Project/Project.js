import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  const { name, img, desrciption, responsibility, reports } = project;
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{desrciption}</p>
      <p>{responsibility}</p>
    </div>
  );
};

export default Project;
