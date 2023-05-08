import React from "react";
import "./Jobexp.css";
import jobExpDoodle from '../../images/jobexpDoodle.svg';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import useTitle from "../../hooks/useTitle";


const Jobexp = () => {

  useTitle('Job Experience');

  return (
    <div className="company-section py-5 px-3 justify-content-center">

      {/* svg icon  */}
      <div className="art-section">
        <img src={jobExpDoodle} alt="" srcset="" className="w-100%" />
      </div>


      {/* job exp section */}

      <section className="job-exp d-flex flex-wrap">

        <div className="mb-5">
          <h2 style={{ borderBottom: '1px solid #00adb5', paddingBottom: '5px', display: 'inline-block' }} >SMART DEVELOPMENT ENGINEERING (SDE) LTD.</h2>
          <h5 className="mt-2 fw-light">Sister Concern of Environment and Infrastructure Management Solution (EIMS) Limited.</h5>
        </div>
        <div className="d-flex flex-wrap mb-5">
          <img className="company-logo" src="https://sdelbd.com/images/sdel%20Logo.gif" alt="" />
          <img className="company-logo" src="https://www.eimslbd.com/images/eimsLogo4.png" alt="" />

        </div>


        <div>
          <h4 style={{ fontSize: '1.5em', borderBottom: '1px dashed #00adb5', fontWeight: '500', padding: '2px' }}>
            Job Title: Junior Geotechnical Engineer</h4>
          <p>{'(May 2022 - Present)'}</p>
        </div>

        <div>
          <h3 style={{ color: '#00adb5', margin: '15px 0px' }}>Responsibilities</h3>
          <h5 style={{ textDecoration: 'underline' }}>Geotechnical</h5>
          <ul>
            <li>
              Supervised field test (SPT, SCPT, and CPT) and laboratory index tests,
              Consolidation Test, Unconfined Compression Test, Direct Shear Test.
            </li>
            <li>
              Performed analysis on the soil test and prepared geotechnical investigation report based on the laboratory test data for various projects -
              <ol className="o-list">
                <li>Geotechnical Investigation for UNICEF under GAVI HSS-3 Programme.</li>
                <li>Geotechnical Investigation for Gandharbpur Water Treatment Snc. for SUEZ International and OTV-Veolia.</li>
                <li>Subsoil Investigation for the construction of Proposed Production Facility for Singer Bangladesh Limited and more.</li>
                <li>Consultancy services for Topographic survey, Morphology-Hydrology study,
                  Geotechnical Investigation, Design and Quality Supervision of two jetties, Anwar Group of Industries.
                </li>
                <li>Subsoil investigation for palmal group of industries.</li>
              </ol>
            </li>
            <li>
              Quality control assurance, maintaining site management and expenses, monitoring investigation progress.
            </li>
          </ul>

          <h4 style={{ textDecoration: 'underline' }}>Structural</h4>
          <ul>
            <li>RCC & steel Structural analysis & design.</li>
            <li>RCC & steel Retrofit analysis & design.</li>
            <li>Preparing Detailed Engineering Assessment (DEA) reports.</li>
            <li>Preliminary assessment of various factory buildings.</li>
          </ul>

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
          </div>

        </div>
      </section>




    </div>
  );
};

export default Jobexp;
