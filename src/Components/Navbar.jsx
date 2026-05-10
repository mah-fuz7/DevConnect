import { NavLink } from "react-router";
import Mylink from "./Mylink";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const {signOutFunc,user}=useContext(AuthContext)
  // HANDLE SIGN OUT FUNC
  const handleSignOut = () => {
    signOutFunc()
    .then(()=>{
      
      toast.success("Logout Successfully")
    }).catch((error)=>{
      console.log(error.message)
      toast.error(error.message)
    })
  }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl font-bold ">DevConnect</a>
    
  </div>
  <div className=" mr-[25%] lg:mr-[40%]">
    <ul className="flex gap-2">

        <Mylink to={'/'} >Home</Mylink>
        <Mylink to={'/signin'} >SignIn</Mylink>
        <Mylink to={'/login'} >login</Mylink>
    </ul>
  </div>
  
  <div className="">
   
   {user?( <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt={user?.displayName}
            src={user?.photoURL} />
            
        </div>
       
      </div>
      <p className="text-black">{user?.displayName}</p>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <p className="justify-between">
           <NavLink to={'/profile'}>profile</NavLink>
          </p>
        </li>
        {/* <li><a>Logout</a></li> */}
       <li> <button onClick={handleSignOut}>Logout</button></li>
      </ul>
    </div>):(<BeatLoader />)}
  </div>
</div>
        </div>
    );
};

export default Navbar;