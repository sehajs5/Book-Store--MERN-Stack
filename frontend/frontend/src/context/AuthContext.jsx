import { Children, createContext, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { useContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}
const gprovider = new GoogleAuthProvider();
//authProvider

export const AuthProvider = ({children})=>{

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = async(email, password)=>{
        return await createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = async(email, password)=>{
        return await signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = async()=>{
        try{
            return await signInWithPopup(auth, gprovider)
        }catch(err){
            console.log(err)
        }
    }

    //log out the user
    const logOut = ()=>{
            return signOut(auth)
    }

    //manage user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false)

            if (user){
                const {email, displayName, photoURL} = user
                const userData = {
                    email, username: displayName, photo: photoURL
                }
            }
        })
        return ()=> unsubscribe();
    }, [] )
    const value = {
        currentUser,
        loading,
        registerUser, 
        loginUser,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value= {value}>
            {children}
        </AuthContext.Provider>
    )
}