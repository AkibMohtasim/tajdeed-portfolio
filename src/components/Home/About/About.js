import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container d-flex flex-row flex-wrap">
      <section className="about-me">

        {/* about me section  */}

        <h1 style={{ marginBottom: '25px' }}>About <span style={{ color: '#00adb5' }}>Me</span></h1>
        <p>
          As a recent Civil and Environmental Engineering graduate, I have
          gained valuable experience working as a geotechnical and project
          engineer for a local consultancy firm for almost a year. While my
          undergraduate studies were important, I also found time to pursue my
          passions for sports, photography, and travel. On the field, I am a
          skilled football player, and I have had the opportunity to participate
          in many competitive matches. Off the field, I enjoy capturing the
          beauty of the world through photography, and I have been fortunate to
          travel to many stunning locations throughout my life. My diverse range
          of interests has helped me to develop a well-rounded perspective,
          which I believe is an asset in the engineering field. I am committed
          to using my skills and experience to contribute to meaningful projects
          that make a positive impact on society.
        </p>
        <p>
          Thank you for taking the time
          to learn a little about me. I am excited about the opportunity to
          connect with others and to explore new challenges and opportunities in
          my career.
        </p>
      </section>

      {/* image section  */}

      <div className="image-section border">
        <div class="container text-center">
          <div class="row row-cols-auto">
            <div class="col border">
              img1
            </div>
            <div class="col border">
              img2
            </div>
          </div>
          <div class="row row-cols-auto">
            <div class="col border">
              img3
            </div>
            <div class="col border">
              img4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
