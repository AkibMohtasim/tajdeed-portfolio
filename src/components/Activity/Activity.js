import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
  const { title, description, images } = activity;
  return (
    <div className='activity my-5 px-2 sm:mx-0'>
      {/* text section  */}
      <div className='text-div' data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="350">
        <h2 style={{ color: '#00adb5', marginBottom: '2%', display: 'inline-block', borderBottom: '1px groove white' }}>{title}</h2>
        <p className='text-justify'>{description}</p>
      </div>

      {/* image section  */}
      <div className='img-wrapper' data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="350">
        {images.map(img => <iframe key={img.title} src={img.link} title={img.title} width="300" height="225"></iframe>)}
      </div>
    </div>
  );
};

export default Activity;