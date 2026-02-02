
const Activities = () => {
  const [activities, setActivities] = useState([]);

  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data) ? data : data.results || [];
        setActivities(results);
      })
      .catch(err => console.error('Error  fetching  activities:', err));
  }, [endpoint]);

  return (
    <section>
      <h2>Activities</h2>
      <div style={{overflowX: 'auto'}}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {activities.length === 0 ? (
              <tr><td colSpan="4" style={{textAlign: 'center'}}>No activities found.</td></tr>
            ) : (
              activities.map((activity, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{activity.name || '-'}</td>
                  <td>{activity.description || '-'}</td>
                  <td>{activity.type || '-'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Activities;
