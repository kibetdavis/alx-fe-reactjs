import React from 'react';

const UserProfile = () => {
  const profileStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  };

  const nameStyle = {
    color: 'blue',
    fontSize: '20px'
  };

  return (
    <div style={profileStyle}>
      <span style={nameStyle}>John Doe</span>
      <p>Software Developer based in Nairobi.</p>
    </div>
  );
};

export default UserProfile;
