import React from "react";
import "./Project.css";
import { ArrowTopRightOnSquareIcon, ArrowLongUpIcon } from '@heroicons/react/24/solid';

export const scrollToTop = () => {
  window.scrollTo({
    top: '0',
    behavior: 'smooth'
  })
};

const Project = ({ project }) => {

  const { name, img, desrciption, responsibility, reports } = project;

  return (
    <div className="project my-5 d-flex">

      {/* project's image section */}

      <div className="d-flex flex-column pt-2 project-img">
        {img.map((i) => (
          <img className="mb-5" src={i} alt=""></img>
        ))}
      </div>

      {/* text items and report */}

      <div className="mx-2 mx-md-5">
        <h2 style={{ fontWeight: '400', marginBottom: '25px', paddingBottom: '5px', borderBottom: '2px groove #00adb5' }}>{name}</h2>
        <p className="description">{desrciption}</p>
        <p className="description">{responsibility}</p>
        <div className="cover-buttons">
          {
            reports.map((report) => {
              return <a className="report-link" href={report} target="_blank" rel="noreferrer">
                Report {reports.indexOf(report) + 1} <ArrowTopRightOnSquareIcon style={{ height: '19px', fontWeight: 'bolder' }} />
              </a>
            })}
        </div>
      </div>

      <button className="scroll-button" onClick={scrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Project;
