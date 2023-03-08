import React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="d-flex flex-column container-fluid cover-container">
      <div>
        <h2 className="name-text">
          OMOR SEEBTAIEN <span>TAJDEED</span>
        </h2>
      </div>
      <div>
        <button>
          <a
            href="https://drive.google.com/file/d/1xJkXrk1tD_6dPkX781xNAHLQbe-zjaps/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download CV and Icon
          </a>
        </button>
        <button>
          {" "}
          <a
            href="https://www.linkedin.com/in/seebtaien"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </button>
      </div>
      <div>
        <button>Scroll Down</button>
      </div>
    </div>
  );
};

export default Cover;
