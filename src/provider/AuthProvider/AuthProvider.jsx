import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.config";

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    
    // create a user with email and password
    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login a user with email and password

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    


    

    const authInfo = {user, createUser, loginUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;