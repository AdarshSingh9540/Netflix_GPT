// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiDMtJaNyB9OXPey9N4hIi3MsWU1rAYbQ",
  authDomain: "netflixgpt-644e0.firebaseapp.com",
  projectId: "netflixgpt-644e0",
  storageBucket: "netflixgpt-644e0.appspot.com",
  messagingSenderId: "732106285851",
  appId: "1:732106285851:web:a21b0bc182453daabd69be",
  measurementId: "G-FZC8TS92Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();