import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth(app);
  const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
   

  // google signin 

  const googleSignin = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }
    

   // Register page
  const SignIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    
  };

  // sign in 
  const createUser = (email, password) => {
    // console.log(email, password);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const updateUser = (displayName, photoURL) =>{
  //   return updateProfile(auth.currentUser,{displayName, photoURL})
    
  // }

  const logOut = () =>{
    return signOut(auth)
  }
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      setUser(user);
    
    
    });
         return () => {
        unSubscribe();
    };
  }, []);
  
  



  const authInfo = {
    SignIn,
    createUser,
    user,
    loading,
    
    logOut,
    // updateUser,
    googleSignin

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes= {
    children:PropTypes.node
}

export default AuthProvider;
