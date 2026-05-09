import { NavLink } from "react-router";
import Mylink from "./Mylink";

const Navbar = () => {
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
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
           <NavLink to={'/profile'}>profile</NavLink>
          </a>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;