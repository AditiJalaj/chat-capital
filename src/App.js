import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import Login from './components/Login';
import RoomList from './components/RoomList';
import AddRoom from './components/AddRoom';
import ChatRoom from './components/ChatRoom';
import firebase from './firebase';
import { auth } from "./firebase";
import {useEffect } from 'react'

function App() {

  const [user,setUser]=useState('')
 
  const authListener=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser(user)
      }
      else{
        setUser("")
      }
    });
  };

  useEffect(()=>{
    authListener();
   
  },[])

  const handleLogOut=()=>{
    firebase.auth().signOut();
  }

  return (
    <div >
    {user ? (<ChatRoom  handleLogOut={handleLogOut} />):(<Login/>)}
    </div>
  );
}

export default App;
