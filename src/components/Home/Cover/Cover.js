import "./Cover.css";
import coverDoodle from '../../../images/coverdoodle.svg';
import { ArrowDownTrayIcon, ArrowLongDownIcon } from '@heroicons/react/24/solid';
import useTitle from "../../../hooks/useTitle";

const Cover = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: '700',
      behavior: 'smooth'
    })
  }

  useTitle('Omor Seebtaien Tajdeed');

  return (
    <div className="d-flex flex-wrap container-fluid cover-container justify-content-around">
      <div className="d-flex flex-column justify-content-center flex-fill position-relative">

        {/* name section */}

        <div>
          <h2 className="name-text">
            OMOR SEEBTAIEN <span>{"  "} TAJDEED</span>
          </h2>
        </div>

        {/* button section */}

        <div className="cover-buttons">
          <a
            href="https://drive.google.com/file/d/1PcTu8zgpJW_VelEJ6llOt5aBKEHf52xy/view"
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

      </div>

      {/* doodle section  */}

      <div className="d-flex flex-fill align-items-center justify-content-center">
        <img className="cover-doodle" src={coverDoodle} alt="" srcset="" />
      </div>
      {/* scroll down button section */}

      <button className="scroll-button" onClick={scrollDown}><ArrowLongDownIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Cover;
