import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const Rootlayout =()=>{
    return(
        <div className="flex flex-col min-h-sceen">
           <Navbar></Navbar>
           <main className="flex-1">
            <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    )
}
export default Rootlayout