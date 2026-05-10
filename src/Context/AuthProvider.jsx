import { createUserWithEmailAndPassword, deleteUser, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
    // GOOGLE PROVIDER
    const provider=new GoogleAuthProvider();

    // GITHUB PROVIDER
const GitProvider=new GithubAuthProvider();

    // EMAIL PASSWORD FUNC
    const EmailPasswordFunc = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
// GOOGLE SIGN IN FUNC
const signInWithGoogleFunc =() =>{
    return signInWithPopup(auth,provider)
    
}
// GITHUB SIGN IN FUNC
const signInWithGithubFunc = () =>{
    return signInWithPopup(auth,GitProvider)
}
// LOG IN WITH EMAIL AND PASSWORD FUNC
const logInWithEmailPasswordFunc = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
// LOG OUT FUNC
const signOutFunc = () => {
    return signOut(auth)
}
// UPDATE USER PROFILE
const updateUserProfileFunc = (name,photoURL) =>{
    return updateProfile(auth.currentUser,{
        displayName:name,
      photoURL:photoURL
        
    })
}
// DELETE 
const deleteUserFunc =async () =>{

    try{
   const user=auth.currentUser;
   await deleteUser(user)
   toast.success("User Delete Successfully")
    }catch(error){
        toast.error(error.message)
    }
 
    
}

    // authInfo
    const authInfo={
EmailPasswordFunc,
signInWithGoogleFunc,
signInWithGithubFunc,
signOutFunc,
logInWithEmailPasswordFunc,
user,
setUser,
updateUserProfileFunc,
deleteUserFunc,
loading

    }
    // user tracker
    useEffect(()=>{
 const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
    console.log(currentUser)
    setUser(currentUser)
    setLoading(false)
 });
 return ()=>{
    unsubscribe()
 }
    },[])


    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
        
    ;
};

export default AuthProvider;