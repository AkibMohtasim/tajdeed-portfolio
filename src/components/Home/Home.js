import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="d-flex flex-column container-fluid home-container">
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
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
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

export default Home;
