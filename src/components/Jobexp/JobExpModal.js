import React from 'react';

import { Modal, Button } from 'flowbite-react';

const JobExpModal = ({ modalFunc, responsibilities, companyName, designation }) => {
  // console.log('debuggin...', responsibilities)
  return (
    <div>
      {/* modal */}

      <Modal className="job-exp-modal" dismissible show={modalFunc.openModal === 'dismissible'} onClose={() => modalFunc.setOpenModal(undefined)}>
        <Modal.Header>
          <p className="text-[#00adb5] mb-1 font-semibold">{companyName}</p>
          <p className="text-white text-[16px]">{designation}</p>
        </Modal.Header>
        <Modal.Body>
          <ul className="space-y-2 px-2">

            <ul className="space-y-2 px-2">
              {
                responsibilities?.map(r => <li className="text-base leading-relaxed text-white">
                  {r}
                </li>)
              }

            </ul>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => modalFunc.setOpenModal(undefined)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobExpModal;