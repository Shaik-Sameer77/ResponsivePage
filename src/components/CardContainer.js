import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users/')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      });
  }, []);

  return (
    <div className="card-container">
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
