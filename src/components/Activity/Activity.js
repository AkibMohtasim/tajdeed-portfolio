import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
  const { title, description, images } = activity;
  return (
    <div className='activity'>
      {/* text section  */}
      <div className='text-div'>
        <h2 style={{ color: '#00adb5', marginBottom: '2%', display: 'inline-block', borderBottom: '1px groove white' }}>{title}</h2>
        <p>{description}</p>
      </div>

      {/* image section  */}
      <div className='d-flex flex-wrap justify-content-center img-div'>
        {images.map(img => <iframe key={img.title} src={img.link} title={img.title} width="300" height="225"></iframe>)}
      </div>
    </div>
  );
};

export default Activity;