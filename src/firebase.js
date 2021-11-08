// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
  apiKey: "AIzaSyA_FjjxLk_TcdptHxMDD7qvJ3LAOeLWxkI",
  authDomain: "login-2-f027c.firebaseapp.com",
  databaseURL: "https://login-2-f027c-default-rtdb.firebaseio.com",
  projectId: "login-2-f027c",
  storageBucket: "login-2-f027c.appspot.com",
  messagingSenderId: "1035913125382",
  appId: "1:1035913125382:web:51f19fc5ab50777af1ad87"
};


const fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB.database().ref();