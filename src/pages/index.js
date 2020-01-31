import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
        {/* <Route path="/me">
          <Me user={user} />
        </Route> */}
        <Route path="/">
          <Me user={user} />
        </Route>
        {/* <Route path="/">
          <div>Sucess</div>
        </Route> */}
      </Switch>
    </Router>
  );
};

export default Pages;
