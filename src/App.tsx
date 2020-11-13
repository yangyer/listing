import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Listing from './components/Listing'

function App() {
  return (
    <Switch>
      <Route exact path="/zlisting">
        <Listing />
      </Route>
    </Switch>
  );
}

export default App;
