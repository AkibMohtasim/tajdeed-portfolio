import React from "react";
import "./Education.css";
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


const Education = () => {

  return (
    <div className="px-4 flex flex-col academics mb-60">

      <h2 className="flex items-center title">Education History <AcademicCapIcon style={{ height: '4rem', color: '#00adb5', marginLeft: '0.3em' }} /></h2>


      {/*-------------- Education history starts -------------------  */}

      <section className="institutions">

        {/* IUT  */}
        <div className="inst-single" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="350">
          <div className="inst-image">
            <img src="https://www.iutoic-dhaka.edu/uploads/img/1554797308.png" alt="" />
          </div>

          <div>
            <h2 className="inst-name">Islamic University of Technology (IUT)</h2>
            <h5>BSc in Civil and Environmental Engineering</h5>
            <p>2018-2022</p>
            <p>CGPA: 3.16/4.00</p>
            {/* <iframe className="iut-transcript" title="iut transcript" src="https://drive.google.com/file/d/184brorEsX3fF1apGljjAk4lSvQHXAJrj/preview" width="300" height="225"></iframe> */}

          </div>
        </div>

        {/* NDC */}

        <div className="inst-single" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="350">
          <div className="inst-image">
            <img src="https://ndc.edu.bd/themes/notredame/assets/images/logo.png" alt="" />
          </div>

          <div>
            <h2 className="inst-name">Notre Dame College</h2>
            <h5>Higher Secondary School Certificate</h5>
            <p>2015-2017</p>
            <p>GPA: 5.00/5.00</p>
          </div>
        </div>

        {/* BUET SCHOOL  */}

        <div className="inst-single" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="350">
          <div className="inst-image">
            <img src="http://www.eusc.edu.bd/media/logo/EUSC%20LOGO.jpg" alt="" />
          </div>

          <div>
            <h2 className="inst-name">Engineering University Higher Secondary School</h2>
            <h5>Secondary School Certificate</h5>
            <p>Passing Year: 2015</p>
            <p>GPA: 5.00/5.00</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Education;
