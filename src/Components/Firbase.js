import { initializeApp } from "firebase/app";
import { collection, getDocs,getFirestore } from "firebase/firestore"; 
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



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;