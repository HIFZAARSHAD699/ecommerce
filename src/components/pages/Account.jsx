import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";


const Account = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-green-600 font-extrabold text-5xl mt-7">New Account</h1>
        <p className="text-gray-600 text-xl mt-2">Please enter your Information below</p>
      </div>

     <form>
      <div className="max-w-lg mx-auto mt-6 space-y-4">
       
        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="border border-gray-400 py-3 px-4 rounded w-full" />
          <input type="text" placeholder="Email" className="border border-gray-400 py-3 px-4 rounded w-full" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Phone Number" className="border border-gray-400 py-3 px-4 rounded w-full" />
          <input type="date" placeholder="Date of Birth" className="border border-gray-400 py-3 px-4 rounded w-full text-gray-600" />
          <select name="Gender" className="border border-gray-400 py-3 px-4 rounded w-full text-gray-600" >
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
         </select>
        </div>
         
        <div className="flex gap-2 text-gray-600">
        <input type="checkbox" className="w-6 h-5" /><p>I agree to <span className="font-bold">Terms & Conditions</span></p>
        </div>
        <button className=" ml-15 bg-green-300 px-32 py-3 text-gray-600 text-lg rounded cursor-pointer  hover:bg-green-100 transition-all duration-300 ease-in-out">
           Create Account
          </button>
        
      </div>
    
      <p className='text-gray-400 ml-160 mt-6 '>Already have an Account?
    <Link to="/login">
    <span className='underline text-gray-600 cursor-pointer ml-2 '>Login</span></Link>
    </p>
    </form>
    <Footer/>
    </>
  );
};

export default Account;
