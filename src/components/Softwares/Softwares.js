import React, { useEffect, useState } from "react";
import Software from "../Software/Software";
import "./Softwares.css";

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
    </div>
  );
};

export default Softwares;
