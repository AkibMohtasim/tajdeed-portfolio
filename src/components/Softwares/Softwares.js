import React, { useEffect, useState } from "react";
import Software from "../Software/Software";
import "./Softwares.css";
import { ArrowLongUpIcon } from '@heroicons/react/24/solid';
import { scrollToTop } from "../Projects/Projects";

const Softwares = () => {
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    fetch("softwares.json")
      .then((res) => res.json())
      .then((data) => setSoftwares(data));
  }, []);
  return (
    <div className="py-5 position-relative d-flex justify-content-center flex-wrap">
      {softwares.map((software) => (
        <Software key={software.id} software={software}></Software>
      ))}

      <button className="scroll-button" onClick={scrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Softwares;
