import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import './App.css';
import axios from 'axios';
import MetaTags from 'react-meta-tags';

axios.defaults.baseURL = 'https://www.thlee.site/';

ReactDOM.render(
  <>
    <MetaTags>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
    </MetaTags>

    <Router>
      <Routes />
    </Router>
  </>,
  document.getElementById('root')
);
