import React from 'react';
// import logo from './logo.svg';
import './css/style.css';
import Main from './components/Main'
import Schedule from './components/Schedule'
import { Switch, Route } from "react-router-dom";
// import './css/App.css';

function App() {
  return (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/schedule" exact component={Schedule} />
    </Switch>
  );
}

export default App;
