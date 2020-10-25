import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CronSetting from './Pages/CronSetting/CronSetting'
import './App.css';


const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CronSetting}/>
      </Switch>
    </Router>
    
  );
}

export default App;

