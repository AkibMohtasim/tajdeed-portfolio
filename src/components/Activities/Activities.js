import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import { ArrowLongUpIcon } from '@heroicons/react/24/solid';
import useTitle from '../../hooks/useTitle';
import useScrollToTop from '../../hooks/useScrollToTop';

const Activities = () => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then(res => res.json())
      .then(data => setActivities(data))
  }, []);


  useTitle('Activities');

  return (
    <div className='activites-section flex flex-col align-items-center position-relative'>
      {
        activities.map(activity => <Activity
          key={activity.id}
          activity={activity}
        ></Activity>)
      }

      <button className="scroll-button" onClick={useScrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Activities;