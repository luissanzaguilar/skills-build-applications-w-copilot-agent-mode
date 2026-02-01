import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log('Fetching Activities from:', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data) ? data : data.results || [];
        setActivities(results);
        console.log('Activities data:', data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [apiUrl]);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, idx) => (
          <li key={idx}>{activity.name || JSON.stringify(activity)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
