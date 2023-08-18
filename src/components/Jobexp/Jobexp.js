import React, { useEffect, useState } from "react";
import "./Jobexp.css";
import { Timeline } from 'flowbite-react';
import jobExpDoodle from '../../images/jobexpDoodle.svg';
import { BriefcaseIcon, EnvelopeOpenIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import useTitle from "../../hooks/useTitle";
import JobExpModal from "./JobExpModal";
import LoadingBtn from "../../commonComponents/LoadingBtn";

const Jobexp = () => {

  useTitle('Job Experience');

  const [companies, setCompanies] = useState([]);

  const [openModal, setOpenModal] = useState();
  const modalFunc = { openModal, setOpenModal };

  const [jobResponsibilities, setJobResponsibilities] = useState([]);
  const [singleCompanyName, setSingleCompanyName] = useState('');
  const [companyDesignation, setCompanyDesignation] = useState('');

  useEffect(() => {
    fetch('jobExp.json')
      .then(res => res.json())
      .then(data => setCompanies(data))
  }, [])


  if (companies.length < 1) {
    return (
      <LoadingBtn />
    )
  }

  else {
    return (
      <div className="px-6 md:px-4 company-section">

        {/* svg icon  */}
        <div data-aos="zoom-out">
          <img src={jobExpDoodle} alt="" className="w-[70%] mx-auto" />
        </div>

        <Timeline className="my-5 timeline-component">

          {
            companies.map(c => {
              const { id, companyName, companyDetails, companyLinks, designation, jobPeriod, responsibilities } = c;
              // console.log(c)
              return (
                <Timeline.Item key={id} className="ml-12">
                  <Timeline.Point icon={CalendarDaysIcon} />
                  <Timeline.Content className="timeline-content" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="350">
                    <Timeline.Time className="text-[#00adb5] text-lg">
                      {jobPeriod}
                    </Timeline.Time>
                    <Timeline.Title className="company-title">
                      {companyName}
                    </Timeline.Title>
                    <span className="italic mt-[-10px]">({companyDetails})</span>
                    <div className="company-logo-wrapper">
                      {
                        companyLinks?.map((logo, index) => {

                          const { companyLogo, companyLink } = logo;
                          return (
                            <a key={index} href={companyLink} target="_blank" rel="noreferrer" className="company-url">
                              <img src={companyLogo} alt="" className="company-logo" />
                            </a>
                          )
                        })
                      }
                    </div>
                    <p className="flex items-center gap-2"> <BriefcaseIcon className="w-[23px]" /><span className="border-b border-[#00adb5]">{designation}</span></p>
                    <button onClick={() => {
                      modalFunc.setOpenModal('dismissible');
                      setJobResponsibilities(responsibilities);
                      setSingleCompanyName(companyName);
                      setCompanyDesignation(designation);
                    }} className="common-btn square-btn">
                      Responsibilities <EnvelopeOpenIcon className="w-[14px]" />
                    </button>
                  </Timeline.Content>
                </Timeline.Item>
              )
            })
          }
        </Timeline>

        <JobExpModal modalFunc={modalFunc} responsibilities={jobResponsibilities} companyName={singleCompanyName} designation={companyDesignation} />
      </div>
    );
  }
};

export default Jobexp;
