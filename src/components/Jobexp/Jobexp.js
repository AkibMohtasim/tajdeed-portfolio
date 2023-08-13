import React, { useEffect, useState } from "react";
import "./Jobexp.css";
import { Timeline, Modal, Button } from 'flowbite-react';
import jobExpDoodle from '../../images/jobexpDoodle.svg';
import { ArrowTopRightOnSquareIcon, BriefcaseIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import useTitle from "../../hooks/useTitle";

const Jobexp = () => {

  useTitle('Job Experience');

  const [companies, setCompanies] = useState([]);

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  useEffect(() => {
    fetch('jobExp.json')
      .then(res => res.json())
      .then(data => setCompanies(data))
  }, [])

  return (
    <div className="container px-6 md:px-4 mx-auto company-section">

      {/* svg icon  */}
      <div>
        <img src={jobExpDoodle} alt="" className="w-[70%] mx-auto" />
      </div>

      <Timeline className="my-5">

        {
          companies.map(c => {
            const { id, companyName, companyDetails, companyLinks, companyLogos, designation, jobPeriod, responsibilities } = c;
            return (
              <Timeline.Item key={id} className="ml-12">
                <Timeline.Point icon={BriefcaseIcon} />
                <Timeline.Content className="timeline-content">
                  <Timeline.Time className="text-[#00adb5] text-lg">
                    {jobPeriod}
                  </Timeline.Time>
                  <Timeline.Title className="company-title">
                    {companyName}
                  </Timeline.Title>
                  <span>{companyDetails}</span>
                  <p>{designation}</p>
                  {/* <Timeline.Body>
                    <ul>
                      {
                        responsibilities?.map(r => <li key={r.id}>
                          {r?.mainResponsibility}
                        </li>)
                      }
                    </ul>
                  </Timeline.Body> */}
                  <button onClick={() => props.setOpenModal('dismissible')} className="common-btn">
                    See Details <EnvelopeOpenIcon className="w-[14px]" />
                  </button>
                </Timeline.Content>
              </Timeline.Item>
            )
          })
        }
      </Timeline>

      {/* modal */}

      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
              ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
              possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Jobexp;
