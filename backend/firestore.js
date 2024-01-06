// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// initializeApp();

// const db = getFirestore();



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDOMv7tIZMbJrxUvjgXXg5ujSJBPSgFd1w",
//   authDomain: "eventsdey-23488.firebaseapp.com",
//   databaseURL: "https://eventsdey-23488-default-rtdb.firebaseio.com",
//   projectId: "eventsdey-23488",
//   storageBucket: "eventsdey-23488.appspot.com",
//   messagingSenderId: "949734304777",
//   appId: "1:949734304777:web:f58b73d965aafb89659cd8",
//   measurementId: "G-D76JENBF3B"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs
import { initializeApp, getAnalytics } from "firebase/app";
import { getFirestore, Timestamp, FieldValue  } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMv7tIZMbJrxUvjgXXg5ujSJBPSgFd1w",
  authDomain: "eventsdey-23488.firebaseapp.com",
  databaseURL: "https://eventsdey-Timestamp, FieldValue 23488-default-rtdb.firebaseio.com",
  projectId: "eventsdey-23488",
  storageBucket: "eventsdey-23488.appspot.com",
  messagingSenderId: "949734304777",
  appId: "1:949734304777:web:f58b73d965aafb89659cd8",
  measurementId: "G-D76JENBF3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Now you can use Firestore
const db = getFirestore(app);

// You can use Timestamp, FieldValue, and other Firebase features as needed
const timestamp = Timestamp.fromDate(new Date());
const fieldValue = FieldValue.serverTimestamp();

// If you are using TypeScript, you can also import types
// import { Firestore, Timestamp, FieldValue } from 'firebase/firestore';
