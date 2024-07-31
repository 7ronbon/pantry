// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHfGLaMMVPQhoi8_7GjcuxT916aiKyqBs",
  authDomain: "expense-tracker-ad886.firebaseapp.com",
  projectId: "expense-tracker-ad886",
  storageBucket: "expense-tracker-ad886.appspot.com",
  messagingSenderId: "258243965394",
  appId: "1:258243965394:web:1e569c7f649e4e5dae980b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);