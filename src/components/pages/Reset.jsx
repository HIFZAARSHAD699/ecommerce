import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Reset = () => {
  return (
    <>
   
    <div className="text-center">
        <h1 className="text-green-600 font-extrabold text-3xl mt-7">Reset Password</h1>
        <p className="text-gray-600 text-xl mt-2">Please enter your Phone Number to receive a One Time Password (OTP).</p>
      </div>
      <div className='max-w-lg mx-auto mt-6 '>
      <input type="text" placeholder="Phone Number:" className="border border-gray-400 py-3 px-4 rounded w-full" />
      <button className=" mt-5 bg-green-300 px-48 py-3 text-gray-600 text-lg rounded cursor-pointer  hover:bg-green-100 transition-all duration-300 ease-in-out">
           Create Account
          </button>
<p className='text-gray-400 ml-45 mt-6 '>Have an Account?
    <Link to="/login">
    <span className='underline text-gray-600 cursor-pointer ml-2 '>Login</span></Link>
    </p>
    
      </div>
      <Footer/>
     
    </>
  )
}

export default Reset