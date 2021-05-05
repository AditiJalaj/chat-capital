import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import Login from './components/Login';
import RoomList from './components/RoomList';
import AddRoom from './components/AddRoom';
import ChatRoom from './components/ChatRoom';
import firebase from './firebase';
import { auth } from "./firebase";
import {useEffect } from 'react'

function App() {

  const history=useHistory()
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
    auth.signOut()
  }

  return (
    <div>
    
   {/* <div >
    {user ? (<ChatRoom  handleLogOut={handleLogOut} />):(<Login/>)}
   </div>

    <Router>
    <div>
   
    <Switch>
    <Route path='/login'> <Login/></Route>
    <Route path='/roomlist'> <RoomList/></Route>
    <Route path='/addroom'> <AddRoom/></Route>
    <Route path='/chatroom/:room'> <ChatRoom/></Route>
    </Switch>
    </div>
    </Router>
     */}

     <div className="App">
     
   <header>
   <img src='../chat-capital-logo.jpg' className="chat-logo"></img>
        <h1 class="chat-capital">Chat-Capital </h1>
       
        <button onClick={handleLogOut} className='sign-out'>SignOut</button>
      </header>
      
      <section>
        {user ? <ChatRoom /> : <Login />}
      </section>

    </div>
    </div>
  );

}

export default App;
