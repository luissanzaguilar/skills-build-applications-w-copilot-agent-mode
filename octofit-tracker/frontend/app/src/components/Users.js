import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
      console.log('Fetching Users from:', endpoint);
      fetch(endpoint)
      .then(res => res.json())
        .then((data) => {
          const results = Array.isArray(data) ? data : data.results || [];
          setUsers(results);
          console.log('Users data:', data);
        })
      .catch(err => console.error('Error fetching users:', err));
  }, [apiUrl]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, idx) => (
            <li key={idx}>{user.username || JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
