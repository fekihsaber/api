import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Users not found!", error);
            });
    }, []);   
  
    return (
        <div className="container">
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <span className="email">Email: {user.email}</span>
                        <span className="phone">Phone: {user.phone}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
