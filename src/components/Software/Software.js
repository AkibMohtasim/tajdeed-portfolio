import React from "react";
import "./Software.css";

const Software = ({ software }) => {
  const { title, softwares } = software;
  return (
    <div className="software-container">
      <h1>{title}</h1>
      {softwares.map((s) => (
        <section key={s.id} className="d-flex">
          <div>
            <img src={s.image} alt="" />
          </div>
          <div>
            <h2>{s.name}</h2>
            <ul>
              {s.abilities.map((a) => (
                <li>{a}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Software;
