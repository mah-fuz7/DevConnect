import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";
import { BeatLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    console.log("AUTH USER:", user);
console.log("LOADING:", loading);
    if(loading){
        return       <div className="flex justify-center items-center min-h-screen">

        <BeatLoader />
        </div>
    }
        if(!user){
            return <Navigate to='/signin'></Navigate>
        }
        return children
};

export default PrivateRoute;