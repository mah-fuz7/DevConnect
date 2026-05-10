import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({children}) => {
    // GOOGLE PROVIDER
    const provider=new GoogleAuthProvider();
    // GITHUB PROVIDER
const GitProvider=new GithubAuthProvider();
    // Email password FUNC
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

    // authInfo
    const authInfo={
EmailPasswordFunc,
signInWithGoogleFunc,
signInWithGithubFunc

    }
    
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
        
    ;
};

export default AuthProvider;