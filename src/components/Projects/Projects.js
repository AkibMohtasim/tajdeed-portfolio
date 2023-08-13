import React, { useEffect, useState } from "react";
import Project from "../Project/Project";
import "./Projects.css";
import { ArrowLongUpIcon } from '@heroicons/react/24/solid';
import useTitle from "../../hooks/useTitle";
import useScrollToTop from "../../hooks/useScrollToTop";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useTitle('Industrial Projects');

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projects container">

      {/* industrial projects */}

      <h2 className="text-center" style={{ textDecoration: 'underline #eeeeee solid 1px' }}>INDUSTRIAL PROJECTS</h2>


      {projects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}

      {/* academic projects */}

      <h2 className="text-center mt-5 pt-5" style={{ textDecoration: 'underline #eeeeee solid 1px' }}>ACADEMIC PROJECT</h2>
      <div className="my-5 flex project">
        <iframe
          className="project-img mb-5"
          height="320"
          title="academic project"
          src="https://drive.google.com/file/d/1FTNQojdoaGS7GS29ONKzMtXZHgoShHVx/preview"></iframe>

        <div className="mx-2 mx-md-5 mb-5">
          <h3 style={{ fontWeight: '400', marginBottom: '25px', paddingBottom: '5px', borderBottom: '2px groove #00adb5' }}>Final Year Design Project</h3>
          <p>
            Design of an 18 storied residential building which covers several major disciplines of Civil  Engineering.
          </p>
          <ul>
            <li> <span>Environmental:</span> Preparation of IEE Report.</li>
            <li><span>Structural: </span> Facility Design & Building Analysis using AutoCAD and ETABS.</li>
            <li><span>Geotechnical:</span> Preparation of Subsoil Investigation report, Soil Parameter
              Determination and Foundation Design using PLAXIS 2D.
            </li>
            <li><span>Transportation: </span>  Proposal preparation, pavement design.</li>
          </ul>
        </div>
      </div>

      <button className="scroll-button" onClick={useScrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Projects;
