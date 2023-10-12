
import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Pages/Firebase/firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app)
function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })
    }

    const google = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoader(false)
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    const userInfo = {
        user,
        loader,
        createUser,
        login,
        logOut,
        updateUser,
        google,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
