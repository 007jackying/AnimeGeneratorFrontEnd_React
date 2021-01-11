import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import './App.css';
import axios from 'axios';


axios.defaults.baseURL = 'https://www.thlee.site/';

ReactDOM.render(
  <div className="wholepage container">
    <Router>
      <Routes />
    </Router>
  </div>,
  document.getElementById('root')
);
