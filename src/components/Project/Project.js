import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  const { name, img, desrciption, responsibility, reports } = project;
  return (
    <div className="project my-5">
      <h2>{name}</h2>
      <div className="d-flex flex-column">
        {img.map((i) => (
          <img className="img my-5" src={i} alt=""></img>
        ))}
      </div>
      <p>{desrciption}</p>
      <p>{responsibility}</p>
      <div>
        {reports.map((report) => (
          <a href={report} target="_blank" rel="noreferrer">
            Report
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
