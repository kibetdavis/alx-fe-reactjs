import React, { useState } from 'react';
import { fetchGitHubUser } from '../services/githubApi';

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (err) {
      setUserData(null);
      setError('User not found or error fetching data');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search GitHub User</h2>
      <input
        type="text"
        value={username}
        placeholder="Enter GitHub username"
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 12px' }}>
        Search
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Bio:</strong> {userData.bio}</p>
          <p><strong>Location:</strong> {userData.location}</p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
