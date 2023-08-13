import React, { useEffect, useState } from "react";
import Software from "../Software/Software";
import "./Softwares.css";
import { ArrowLongUpIcon } from '@heroicons/react/24/solid';
import useTitle from "../../hooks/useTitle";
import useScrollToTop from "../../hooks/useScrollToTop";

const Softwares = () => {
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    fetch("softwares.json")
      .then((res) => res.json())
      .then((data) => setSoftwares(data));
  }, []);

  useTitle('Software Skills');

  return (
    <div className="py-5 position-relative flex justify-center flex-wrap">
      {softwares.map((software) => (
        <Software key={software.id} software={software}></Software>
      ))}

      <button className="scroll-button" onClick={useScrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Softwares;
