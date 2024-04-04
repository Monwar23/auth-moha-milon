// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF7VIgSsRuhwTfrpOYxX2oYPToqpIP4H0",
  authDomain: "auth-moha-milon-96e95.firebaseapp.com",
  projectId: "auth-moha-milon-96e95",
  storageBucket: "auth-moha-milon-96e95.appspot.com",
  messagingSenderId: "833863405863",
  appId: "1:833863405863:web:2133806978335f22a8d902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
