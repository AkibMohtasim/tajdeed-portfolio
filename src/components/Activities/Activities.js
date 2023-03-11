import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import { ArrowLongUpIcon } from '@heroicons/react/24/solid';
import { scrollToTop } from "../Projects/Projects";

const Activities = () => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then(res => res.json())
      .then(data => setActivities(data))
  }
    , [])

  return (
    <div className='activites-section d-flex flex-column align-items-center position-relative'>
      {
        activities.map(activity => <Activity
          key={activity.id}
          activity={activity}
        ></Activity>)
      }

      <button className="scroll-button" onClick={scrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Activities;