import React from "react";
import "./Cover.css";
import { ArrowDownTrayIcon, ArrowLongDownIcon } from '@heroicons/react/24/solid'

const Cover = () => {
  return (
    <div className="d-flex flex-column container-fluid cover-container">

      {/* name section */}

      <div>
        <h2 className="name-text">
          OMOR SEEBTAIEN <span>{"  "} TAJDEED</span>
        </h2>
      </div>

      {/* button section */}

      <div className="cover-buttons">
        <a
          href="https://drive.google.com/file/d/1m_h-tXu37Alfl8FA4stZnbGiWMd9X1HY/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          Download CV <ArrowDownTrayIcon style={{ height: '19px', fontWeight: 'bolder' }} />
        </a>

        {" "}
        <a
          href="https://www.linkedin.com/in/seebtaien"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn

        </a>
      </div>

      {/* scroll down button section */}

      <div className="scroll-button">
        <button><ArrowLongDownIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
      </div>
    </div>
  );
};

export default Cover;
