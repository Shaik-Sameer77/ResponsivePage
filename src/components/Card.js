import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="card">
      <img
        src={user.avatar}
        alt={`Avatar of ${user.first_name} ${user.last_name}`}
        className="avatar"
      />
      <p className="name">{user.first_name} {user.last_name}</p>
      <p className="email">{user.email}</p>
      <p className="profession">Software Engineer</p>
    </div>
  );
};

export default Card;
