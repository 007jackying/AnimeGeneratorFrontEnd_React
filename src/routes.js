import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Profile } from './views/Profile';

import { NBar } from './components/NavBar';
import {Gatcha} from "./components/Gatcha";

import {ViewDetails} from './components/viewDetails'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';


export const Routes = () => {
  return (
    <div className="container">
     <NBar/>
      <RouterRoutes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/About" element={<About />} />

        <Route path="/viewDetails/:id" element={<ViewDetails />} />
        <Route path="/viewDetails/" element={<Navigate to="/Home" replace />} />
        <Route path="/Gatcha" element={<Gatcha />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />

      </RouterRoutes>

    </div>
  );
};