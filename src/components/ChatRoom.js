import firebase from '../firebase';
import {  firestore,auth } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState ,useRef} from 'react';
import ChatMessage from './ChatMessage'


const ChatRoom = ({handleLogOut}) => {
    //??????
    const dummy=useRef()

    //creating a ref to the collection messages
    const messageRef=firestore.collection('messages');
    const query= messageRef.orderBy('createdAt').limit(20);

    //?????
    const [messages]=useCollectionData(query,{idField:'id'})
     const [formValue,setFormValue]=useState('')

     const sendMessage=async(e)=>{
        e.preventDefault()

        const {uid,photoURL}=auth.currentUser

        await messageRef.add({
            text:formValue,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')
        dummy.current.scrollIntoView({behaviour:'smooth'})
     }

    return ( 
     /*
        <h1>You are logged in</h1> 
       <button onClick={handleLogOut}>Logout</button>

        */
    
     <>
    <main>

      {messages && messages.map(msg =>
         <ChatMessage key={msg.id} message={msg}
          />)}

      <div ref={dummy}></div>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue}
       onChange={(e) => setFormValue(e.target.value)} placeholder="type something.." />

      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </>
      
        );
}
 
export default ChatRoom;