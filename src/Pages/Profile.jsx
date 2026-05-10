import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebase.config";
import { MoonLoader } from "react-spinners";

const Profile = () => {
  const { user ,updateUserProfileFunc,setUser,deleteUserFunc} = useContext(AuthContext);

//   
// console.log(user?.metadata);
// console.log(user.metadata.creationTime);
// 
//   UPDATE PROFILE HANDLER 
  const handleUpdate = (e) =>{
 e.preventDefault();
 const url=e.target?.url.value;
 const name=e.target?.name.value;
 updateUserProfileFunc(name,url)
 .then(()=>{
    // INSTANT UI UPDATE
    setUser({...auth.currentUser})
    // CLOSE THE MODAL AFTER SUBMIT THE UPDATE DATA
    document.getElementById('my_modal_3').close()
    toast.success("update successfully")
    // INPUT FEILD CLEAN AFTER SUBMIT THE UPDATE DATA
    e.target.reset()
 }).catch(()=>{
    toast.error("Update Failed")
 })
 console.log({name,url})
  }
// HANDLE DELETE USER
const handleDelete = () =>{
    deleteUserFunc()
    
    console.log("btn click")
}
  return (
    <div className="min-h-screen flex justify-center items-center">
     {
        user?( <div className="max-w-sm bg-gray-600 rounded-2xl shadow-lg p-5">
        
        <img
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
          src={user?.photoURL}
          alt="user"
        />

        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-white">
            {user?.displayName}
          </h2>

          <p className="text-white mt-2">
            {user?.email}
          </p>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn border-0 mt-2 bg-sky-300 font-bold text-white " onClick={()=>document.getElementById('my_modal_3').showModal()}>Update profile</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handleUpdate} >
<fieldset className="fieldset">
                  <label className="label">PhotoURL</label>
                  <input name="url" type="link" className="input" placeholder="PhotoURL" />
                  <label className="label">Name</label>
                  <input
                  name="name"
                    type="name"
                    className="input"
                    placeholder="name"
                  />
                  <button type="submit"  className="btn btn-neutral mt-6">Update</button>
                
                </fieldset>  
                </form> 
  </div>
</dialog>
<button onClick={handleDelete} type="submit"  className="btn bg-sky-300 text-white btn-neutral mt-2 ml-2">Delete User</button>
        </div>

      </div>):(<MoonLoader />)
     }
    </div>
  );
};

export default Profile;