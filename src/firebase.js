import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  firebaseConfig = {
    apiKey: "AIzaSyCParokIefVQcvrkQqUnRCA_-mXLKGZeSk",
    authDomain: "chat-capital-3a16a.firebaseapp.com",
    projectId: "chat-capital-3a16a",
    storageBucket: "chat-capital-3a16a.appspot.com",
    messagingSenderId: "527821585347",
    appId: "1:527821585347:web:a64406bbdb795b58e3db76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth()
  const firestore=firebase.firestore()


  export default firebase;
  export {auth,firestore}