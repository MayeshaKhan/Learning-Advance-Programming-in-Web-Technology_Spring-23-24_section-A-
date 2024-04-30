'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllUsers() {
  const [users, setUsers] = useState<any[]>([]); 

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers(); 
  }, []); 

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


