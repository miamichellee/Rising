import firebase from "firebase";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "firebase/auth";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "./Login";

var firebaseConfig = {
    apiKey: "AIzaSyDjR20m5y-_h-Q1f_ivCWZo9EOcYWiAn58",
    authDomain: "rising-e2c96.firebaseapp.com",
    databaseURL: "https://rising-e2c96-default-rtdb.firebaseio.com",
    projectId: "rising-e2c96",
    storageBucket: "rising-e2c96.appspot.com",
    messagingSenderId: "985292259832",
    appId: "1:985292259832:web:d86a01bb6c0f411baa960d",
    measurementId: "G-R8QV79Q051"
  };
  
const fire = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const signInWithGoogleButton = document.getElementById('signInWithGoogle');

const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  
  }
  
  
  
  signInWithGoogleButton.addEventListener('click', signInWithGoogle);


export default fire;