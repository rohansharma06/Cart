import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import *  as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9VVUOJOc2HnlCD_2-eRKF5xGwmC6yG24",
    authDomain: "cart-92d4e.firebaseapp.com",
    databaseURL: "https://cart-92d4e.firebaseio.com",
    projectId: "cart-92d4e",
    storageBucket: "cart-92d4e.appspot.com",
    messagingSenderId: "895651674565",
    appId: "1:895651674565:web:7f85b3ae08fbc2e4de33ac"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render( <App />, document.getElementById('root') );

