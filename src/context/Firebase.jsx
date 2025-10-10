import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCHPNxjZq4okG4pqlFBpZxk-wKG1a6nmE",
  authDomain: "app-fe355.firebaseapp.com",
  databaseURL: "https://app-fe355-default-rtdb.firebaseio.com",
  projectId: "app-fe355",
  storageBucket: "app-fe355.firebasestorage.app",
  messagingSenderId: "585299121666",
  appId: "1:585299121666:web:83026b61aea7caf136391b",
  databaseURL: "https://app-fe355-default-rtdb.firebaseio.com/",
};

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const database = getDatabase(FirebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
