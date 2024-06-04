import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // create a user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login a user with email and password

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign with google

  const googleSign = () =>{
   return signInWithPopup(auth, googleProvider)
  }

  // logout the user

  const logout = () =>{
   return signOut(auth)
  }

  // set the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, loginUser, googleSign, logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
