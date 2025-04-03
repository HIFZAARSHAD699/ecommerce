import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Login = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-10">
    
      <h1 className="text-green-600 font-extrabold text-7xl">Welcome</h1>
      <p className="text-gray-600 text-3xl mt-2">Login to continue</p>

      <div className="flex flex-col items-center gap-6 mt-6 w-80">
    <input type="text" placeholder="Email" className="border border-gray-400 py-3 px-6 rounded w-full"/>
     <input type="password" placeholder="Enter your password" className="border border-gray-400 py-3 px-6 rounded w-full"/>
      </div>
<Link to="/reset">
    <p className="text-gray-600 underline mt-3 cursor-pointer ml-42">Forgot password</p></Link>

 <button className="mt-4 bg-green-300 px-32 py-3 text-gray-600 text-lg rounded cursor-pointer hover:bg-green-100 transition-all duration-300 ease-in-out">
        Sign in </button>

     
    <p className="text-gray-400 mt-6">Don’t have an account?
        <Link to="/account">
          <span className="underline text-gray-600 cursor-pointer ml-2">Create Account</span>
        </Link></p>
       
    </div>
     <Footer/>
     </>
   

  );
};

export default Login;
