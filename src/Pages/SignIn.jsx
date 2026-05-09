import MyContainer from "../Components/MyContainer";

 

const SignIn = () => {
    return (
        <div>
         <MyContainer url="https://i.ibb.co.com/C5MvgH2G/ghfghfgh.jpg">
         
<div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Sign in now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Signin</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>

         </MyContainer>
        </div>
    );
};

export default SignIn;