import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCHPNxjZq4okG4pqlFBpZxk-wKG1a6nmE",
  authDomain: "app-fe355.firebaseapp.com",
  projectId: "app-fe355",
  storageBucket: "app-fe355.firebasestorage.app",
  messagingSenderId: "585299121666",
  appId: "1:585299121666:web:c3046109a6515d0d36391b",
  databaseURL: "https://app-fe355-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
