import { NavLink } from "react-router";


const Mylink = ({to,children}) => {
    return (
       <NavLink to={to} className={({isActive})=>isActive?"btn font-bold bg-green-600 border-none text-white":"btn font-bold bg-green-300 border-none text-white"}>
{children}
       </NavLink>
    );
};

export default Mylink;