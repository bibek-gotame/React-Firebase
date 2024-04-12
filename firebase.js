// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAD8Sx_R9ioeZhmG0R99uN5FxFjkn8Yjk",
  authDomain: "react-firebase-cf26e.firebaseapp.com",
  databaseURL: "https://react-firebase-cf26e-default-rtdb.firebaseio.com",
  projectId: "react-firebase-cf26e",
  storageBucket: "react-firebase-cf26e.appspot.com",
  messagingSenderId: "874709290707",
  appId: "1:874709290707:web:73d16de49bb706fd060e26",
  measurementId: "G-SCB8TP15DT",
  databaseURL: "https://react-firebase-cf26e-default-rtdb.firebaseio.com/",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);