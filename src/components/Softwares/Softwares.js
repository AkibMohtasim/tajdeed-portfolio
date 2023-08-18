import React, { useEffect, useState } from "react";
import Software from "../Software/Software";
import "./Softwares.css";
import useTitle from "../../hooks/useTitle";
import LoadingBtn from "../../commonComponents/LoadingBtn";

const Softwares = () => {
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    fetch("softwares.json")
      .then((res) => res.json())
      .then((data) => setSoftwares(data));
  }, []);

  useTitle('Software Skills');

  if (softwares.length < 1) {
    return <LoadingBtn />
  }

  return (
    <div className="my-5 position-relative softwares-wrapper">
      {softwares.map((software) => (
        <Software key={software.id} software={software}></Software>
      ))}
    </div>
  );
};

export default Softwares;
