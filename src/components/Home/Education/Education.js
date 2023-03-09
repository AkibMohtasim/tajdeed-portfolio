import React from "react";
import "./Education.css";
import { AcademicCapIcon } from '@heroicons/react/24/solid'

const Education = () => {
  return (
    <div className="d-flex flex-column align-items-start academics">
      <h1 className="d-flex align-items-center title">Education History <AcademicCapIcon style={{ height: '4rem', color: '#00adb5', marginLeft: '0.3em' }} /></h1>

      {/*-------------- Education history starts -------------------  */}

      {/* IUT  */}

      <div className="d-flex flex-wrap align-items-center py-5 w-75">
        <div className="pe-5 w-25 text-center">
          <img src="https://www.iutoic-dhaka.edu/uploads/img/1554797308.png" alt="" srcset="" />
        </div>

        <div>
          <h2 className="border-bottom py-2">Islamic University of Technology (IUT)</h2>
          <h5>BSc in Civil and Environmental Engineering</h5>
          <p>2018-2022</p>
          <p>CGPA: 3.17/4.00</p>
        </div>
      </div>

      {/* NDC */}

      <div className="d-flex flex-wrap align-items-center py-5 w-75">
        <div className="pe-5 w-25 text-center">
          <img src="https://ndc.edu.bd/themes/notredame/assets/images/logo.png" alt="" srcset="" />
        </div>

        <div>
          <h2 className="border-bottom py-2">Notre Dame College</h2>
          <h5>Higher Secondary School Certificate</h5>
          <p>2015-2017</p>
          <p>GPA: 5.00/5.00</p>
        </div>
      </div>

      {/* BUET SCHOOL  */}

      <div className="d-flex flex-wrap align-items-center py-5 w-75">

        <div className="pe-5 w-25 text-center">
          <img src="http://www.eusc.edu.bd/media/logo/EUSC%20LOGO.jpg" alt="" srcset="" />
        </div>

        <div>
          <h2 className="border-bottom py-2">Engineering University Higher Secondary School</h2>
          <h5>Secondary School Certificate</h5>
          <p>Passing Year: 2015</p>
          <p>GPA: 5.00/5.00</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
