import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (displayName, photoURL) =>{
    return updateProfile(auth.currentUser,{displayName, photoURL})
    
  }
  const logOut = () =>{
    return signOut(auth)
  }
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('value of the correct', currentUser)
    setUser(currentUser);
    //   console.log("observing user ", currentUser);    
    
    });
         return () => {
        unSubscribe();
    };
  }, []);
  
  

// useEffect(()=>{
//    const subscribe =   onAuthStateChanged(auth, currentUser =>{
//         setUser(currentUser)
//     })
//     return () =>{
//         subscribe();
//     }
// },[])

  const authInfo = {
    googleSignIn,
    signUp,
    user,
    logOut,
    updateUser

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes= {
    children:PropTypes.node
}

export default AuthProvider;
