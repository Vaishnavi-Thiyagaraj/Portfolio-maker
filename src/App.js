import React, { useState, useEffect } from 'react';
import Pages from './pages';
import UserForm from './components/UserForm/UserForm.js'
import { Link, useLocation } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  // let location = useLocation();
   console.log(window.location.search);
   console.log(window.location.search.split('='));
   var searchParams = window.location.search.split('=');
   console.log(searchParams[1]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/users?name=${searchParams[1]}`)
      .then(res => res.json())
      .then(user => {
        console.log(user);
        setUser(user[0]);
      });
  }, []);

  if(!user) {
    //return (<div>{"Create a new user"}</div>);
    return <UserForm/>
  }
  //return (<div>{"I am a existing user"}</div>);
   return <Pages user={user} />;
}

export default App;