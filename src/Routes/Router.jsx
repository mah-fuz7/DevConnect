import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import PrivateRoute from "../Private/PrivateRoute";


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
            element:<PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>

        },
    ]
  },
]);
export default router