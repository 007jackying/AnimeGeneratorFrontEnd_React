import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { NBar } from './components/NavBar';
import {Gatcha} from "./components/Gatcha";

import {ViewDetails} from './components/viewDetails'
import { Router,Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div className="container">
     <NBar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        
        <Route exact path="/viewDetails/:id" component={ViewDetails} />
        <Route exact path="/Gatcha" component={Gatcha}/>
        
      </Switch>
     
    </div>
  );
};