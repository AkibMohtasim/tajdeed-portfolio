import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container mb-60">
      <h2 style={{ marginBottom: '25px', fontWeight: '700' }}>About <span style={{ color: '#00adb5' }}>Me</span></h2>

      <div className="about-me-wrapper">
        <section className="about-me" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="300">
          {/* about me section  */}
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

        <div className="image-section" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="300">
          <div>
            <iframe src="https://drive.google.com/file/d/1JkthGAe_FpznNN2Eg0dKxi-tdXmYSL7L/preview" title="graduation picture" allow="autoplay"></iframe>
          </div>
          <div>
            <iframe src="https://drive.google.com/file/d/1jTLK7ak_lbWAvxoYxtuqWVMr1W8Q-QIB/preview" title="football" allow="autoplay"></iframe>
          </div>
          <div>
            <iframe src="https://drive.google.com/file/d/1ESexnBbmGDurodtvRGSdCjJecgeaYAc_/preview" title="Ibn Batuta" allow="autoplay"></iframe>
          </div>
          <div>
            <iframe src="https://drive.google.com/file/d/1NFPHc6N4wxuYrSUbIpjT6Qq8sH7_dWHa/preview" title="GMB Akash" allow="autoplay"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
