import React from 'react';
import ReactDOM from 'react-dom';
//import React, { useState, useEffect } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
//import * as firebase from 'firebase';
import "firebase/auth";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

