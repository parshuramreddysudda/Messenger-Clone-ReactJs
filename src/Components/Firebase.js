import firebase from 'firebase/app'
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN5IC8k3995VlMv0AdTOrLvsTSZWPofrY",
  authDomain: "messenger-9c71c.firebaseapp.com",
  projectId: "messenger-9c71c",
  storageBucket: "messenger-9c71c.appspot.com",
  messagingSenderId: "129805035218",
  appId: "1:129805035218:web:33c50c98f4817dc1f8ef0b",
  measurementId: "G-TZH91G72PZ"
};


firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

 function sendMessage(user) {
  db.collection('messages').add({
    username: user.username,
    message: user.message,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
}

const services = {
  db,
  sendMessage
}


export default services;