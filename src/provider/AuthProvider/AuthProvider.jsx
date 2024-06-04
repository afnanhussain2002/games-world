import {
  FacebookAuthProvider,
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
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true)

  // create a user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login a user with email and password

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign with google

  const googleSign = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  // sign with facebook

  const facebookSign = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider);
  };

  // logout the user

  const logout = () => {
    setLoading(true)
    return signOut(auth);
  };

  // set the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleSign,
    facebookSign,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
