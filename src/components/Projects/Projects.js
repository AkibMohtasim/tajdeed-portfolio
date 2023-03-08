import React, { useEffect, useState } from "react";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projects container-fluid">
      <h2 className="text-center">this is the projects section</h2>

      {projects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </div>
  );
};

export default Projects;
