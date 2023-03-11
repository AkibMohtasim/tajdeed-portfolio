import React from "react";
import "./Education.css";
import { AcademicCapIcon, ArrowLongUpIcon } from '@heroicons/react/24/solid';
import { scrollToTop } from "../../Projects/Projects";


const Education = () => {

  return (
    <div className="d-flex flex-column academics">

      <h1 className="d-flex align-items-center title">Education History <AcademicCapIcon style={{ height: '4rem', color: '#00adb5', marginLeft: '0.3em' }} /></h1>


      {/*-------------- Education history starts -------------------  */}

      <section className="institutions w-full">

        {/* IUT  */}
        <div className="inst-single">
          <div className="inst-image">
            <img src="https://www.iutoic-dhaka.edu/uploads/img/1554797308.png" alt="" />
          </div>

          <div className="mt-2">
            <h2>Islamic University of Technology (IUT)</h2>
            <h5>BSc in Civil and Environmental Engineering</h5>
            <p>2018-2022</p>
            <p>CGPA: 3.16/4.00</p>
            <iframe title="iut transcript" src="https://drive.google.com/file/d/184brorEsX3fF1apGljjAk4lSvQHXAJrj/preview" width="300" height="225"></iframe>

            {/* 
            <div className="cover-buttons">
              <a
                href="https://sdelbd.com/"
                target="_blank"
                rel="noreferrer"
              >
                About SDE <ArrowTopRightOnSquareIcon style={{ height: '19px', fontWeight: 'bolder' }} />
              </a>

              {" "}
              <a
                href="https://www.eimslbd.com/"
                target="_blank"
                rel="noreferrer"
              >
                About EIMS <ArrowTopRightOnSquareIcon style={{ height: '19px', fontWeight: 'bolder' }} />
              </a>
            </div> */}

          </div>
        </div>

        {/* NDC */}

        <div className="inst-single">
          <div className="inst-image">
            <img src="https://ndc.edu.bd/themes/notredame/assets/images/logo.png" alt="" />
          </div>

          <div className="mt-2">
            <h2>Notre Dame College</h2>
            <h5>Higher Secondary School Certificate</h5>
            <p>2015-2017</p>
            <p>GPA: 5.00/5.00</p>
          </div>
        </div>

        {/* BUET SCHOOL  */}

        <div className="inst-single">
          <div className="inst-image">
            <img src="http://www.eusc.edu.bd/media/logo/EUSC%20LOGO.jpg" alt="" />
          </div>

          <div className="mt-2">
            <h2>Engineering University Higher Secondary School</h2>
            <h5>Secondary School Certificate</h5>
            <p>Passing Year: 2015</p>
            <p>GPA: 5.00/5.00</p>
          </div>
        </div>
      </section>

      <button className="scroll-button" onClick={scrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>

    </div>
  );
};

export default Education;
