import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children:[
        {
            path:"/",
            index: true,
            element:<Home></Home>

        },
        {
            path:"/",
            index: true,
            element:<Home></Home>

        },
        {
            path:"/signin",            
            element:<SignIn></SignIn>

        },
        {
            path:"/login",            
            element:<Login></Login>

        },
        {
            path:"/profile",            
            element:<Profile></Profile>

        },
    ]
  },
]);
export default router