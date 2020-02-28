import React, { useState, useEffect } from 'react';
import Pages from './pages';
import UserForm from './components/UserForm/UserForm.js'
import EditForm from './components/UserForm/EditForm.js';
import { Link, useLocation } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const searchParams = window.location.search.split('=');
  useEffect(() => {
    fetch(`http://localhost:3000/api/users?name=${searchParams[1]}`)
      .then(res => res.json())
      .then(user => {
        setUser(user[0]);
      });
  }, []);

  if(!user) {
    return <UserForm/>
  }
  if(window.location.pathname === "/edit") {
    return <EditForm user={user}/>
  }
  return <Pages user={user} />;
}

export default App;