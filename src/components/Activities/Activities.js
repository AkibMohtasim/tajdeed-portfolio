import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import useTitle from '../../hooks/useTitle';
import LoadingBtn from '../../commonComponents/LoadingBtn';

const Activities = () => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then(res => res.json())
      .then(data => setActivities(data))
  }, []);


  useTitle('Activities');

  if (activities.length < 1) {
    return <LoadingBtn />
  }

  return (
    <div className='activites-section'>
      {
        activities.map(activity => <Activity
          key={activity.id}
          activity={activity}
        ></Activity>)
      }
    </div>
  );
};

export default Activities;