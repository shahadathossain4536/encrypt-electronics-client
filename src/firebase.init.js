// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB5xKz-nl53QJurWfxzFhpzcdE-S5bjJs",
  authDomain: "encrypt-electronics-client.firebaseapp.com",
  projectId: "encrypt-electronics-client",
  storageBucket: "encrypt-electronics-client.appspot.com",
  messagingSenderId: "474607378533",
  appId: "1:474607378533:web:5272237101bb22b087e68c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
