import React from "react";
import "./Software.css";

const Software = ({ software }) => {
  const { title, softwares } = software;

  return (
    <div className="software-container" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="350">
      <h2 style={{ display: 'inline-block' }}>{title}</h2>
      {softwares.map((s) => (
        <section key={s.id} className="mb-5 flex flex-col">
          <div className="sw-image mb-2">
            <img src={s.image} alt="" />
          </div>
          <div>
            <h2 style={{ fontWeight: '400', backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '3px 10px', display: 'inline-block', borderRadius: '5px' }}>{s.name}</h2>
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
