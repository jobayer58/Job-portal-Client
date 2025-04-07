import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const signinWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signinUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signinUser,
        signOutUser,
        signinWithGoogle
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;