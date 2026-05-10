import { useContext } from "react";
import MyContainer from "../Components/MyContainer";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

 

const Login = () => {
  const{logInWithEmailPasswordFunc}=useContext(AuthContext)
  
  // HANDLE LOGIN
  const hadleLogin =(e) =>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    logInWithEmailPasswordFunc(email,password)
    .then((result)=>{
      console.log(result.user)
      toast.success("User Login Successfully")
    }).catch((error)=>{
      console.log(error.message)
      toast.error("Login Failed")
    })
    console.log({email,password})
    
  }
    return (
        <div>
    <MyContainer url="https://i.ibb.co.com/5hHgh8qh/download-4.jpg">
    
    <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={hadleLogin}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    </MyContainer>
        </div>
    );
};

export default Login;