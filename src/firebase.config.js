// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIDKoe5jNxMBLj0sXZqIsQ6_GeensKs9c",
  authDomain: "blockchain-course-client.firebaseapp.com",
  projectId: "blockchain-course-client",
  storageBucket: "blockchain-course-client.appspot.com",
  messagingSenderId: "177355777935",
  appId: "1:177355777935:web:ea9c1b4ff39c5dfebe8dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;