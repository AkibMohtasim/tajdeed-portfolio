import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center academics">
      <h1>Education History</h1>
      <div className="iut-academics d-flex justify-content-center">
        <div className="iut-logo">
          <h2>IUT logo here</h2>
        </div>

        <div>
          <p>
            Islamic University of Technology (IUT) 2017-2022 CGPA : 3.17/4.00
          </p>
        </div>
      </div>
      <div className="ndc-academics d-flex justify-content-center">
        <div className="ndc-logo">
          <h2>NDC logo here</h2>
        </div>

        <div>
          <p>Notre Dame College 2015-2017 GPA : 5.00/5.00</p>
        </div>
      </div>
      <div className="buetsc-academics d-flex justify-content-center">
        <div className="buetsc-logo">
          <h2>buetsc logo here</h2>
        </div>

        <div>
          <p>
            Engineering University Higher Secondary School passing year 2015 GPA
            : 5.00/5.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
