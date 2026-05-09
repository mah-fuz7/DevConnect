import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {
    
    // authInfo
    const authInfo={

    }
    
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
        
    ;
};

export default AuthProvider;