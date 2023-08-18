import "./Cover.css";
import coverDoodle from '../../../images/coverdoodle.svg';
import { ArrowDownTrayIcon, ArrowLongDownIcon } from '@heroicons/react/24/solid';
import useTitle from "../../../hooks/useTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Cover = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: '700',
      behavior: 'smooth'
    })
  }

  useTitle('Omor Seebtaien Tajdeed');

  return (
    <div className="px-4 cover-container mb-60">

      {/* left section */}

      <div className="home-cover-name">
        <div>
          <h1 className="name-text">
            OMOR SEEBTAIEN <span>{"  "} TAJDEED</span>
          </h1>
        </div>

        <div className="cover-buttons">
          <a href="https://drive.google.com/file/d/1PcTu8zgpJW_VelEJ6llOt5aBKEHf52xy/view" target="_blank" rel="noreferrer">Download <ArrowDownTrayIcon style={{ height: '19px', fontWeight: 'bolder' }} /></a>
          <a href="https://www.linkedin.com/in/seebtaien" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* doodle section  */}

      <div className="cover-doodle" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1500">
        <img className="cover-doodle-img" src={coverDoodle} alt="" />
      </div>
      {/* scroll down button section */}

      <button className="scroll-button scroll-bottom" onClick={scrollDown}><ArrowLongDownIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Cover;
