import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signin",
        { email, password }
      );
      console.log(response.data.message);
      alert("Login successful!");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 px-4">
        <h1 className="text-green-600 font-extrabold text-4xl sm:text-7xl">Welcome</h1>
        <p className="text-gray-600 text-xl sm:text-3xl mt-2 text-center">Login to continue</p>

        <div className="flex flex-col items-center gap-6 mt-6 w-full max-w-sm">
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-400 py-3 px-6 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-400 py-3 px-6 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* <Link to="/reset" className="w-full max-w-sm text-right mt-2">
          <p className="text-gray-600 underline text-sm sm:text-base cursor-pointer">Forgot password?</p>
        </Link> */}

        <button
          onClick={handleLogin}
          type="button"
          className="mt-6 w-full max-w-sm bg-green-300 py-3 text-gray-600 text-lg rounded cursor-pointer hover:bg-green-100 transition-all duration-300 ease-in-out"
        >
          Sign in
        </button>

        <p className="text-gray-400 mt-6 text-center">
          Don’t have an account?
          <Link to="/account">
            <span className="underline text-gray-600 cursor-pointer ml-2">Create Account</span>
          </Link>
        </p>
      <p className="text-gray-400 mt-6 text-center">or</p>
    <Link to = "/"> <p className="underline text-gray-600 cursor-pointer ml-2">continue to Shopping</p> </Link> 
      </div>
      <Footer />
    </>
  );
};

export default Login;
