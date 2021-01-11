import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Profile } from './views/Profile';

import { NBar } from './components/NavBar';
import {Gatcha} from "./components/Gatcha";

import {ViewDetails} from './components/viewDetails'
import { Router,Route, Switch, Redirect } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

export const Routes = () => {
  return (
    <div className="container">
     <NBar/>
     <MetaTags>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
    </MetaTags>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        
        <Route exact path="/viewDetails/:id" component={ViewDetails} />
        <Route path="/viewDetails/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Gatcha" component={Gatcha}/>
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Profile" component={Profile}/>
        
      </Switch>
     
    </div>
  );
};