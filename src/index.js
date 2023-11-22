import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Routes } from './routes'; // where we are going to specify our routes


axios.defaults.baseURL = 'https://dreamanime.thleedev.codes/';

ReactDOM.render(
  <div className="wholepage container">
    <Router>
      <Routes />
    </Router>
  </div>,
  document.getElementById('root')
);
