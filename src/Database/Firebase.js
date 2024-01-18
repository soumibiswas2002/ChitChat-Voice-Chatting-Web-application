import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, updateProfile } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyDAItfC6I_F6OnzmctlShaW9T9lpgOvbEo",
  authDomain: "foodweb-2ae85.firebaseapp.com",
  projectId: "foodweb-2ae85",
  storageBucket: "foodweb-2ae85.appspot.com",
  messagingSenderId: "277694604720",
  appId: "1:277694604720:web:0670145a1198a4dfb4e275",
  measurementId: "G-86KHQ5S3X4",
};
const appli = firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export const auth = getAuth(appli);

export default appli;
