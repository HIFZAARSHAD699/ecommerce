import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";

const Account = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAccount = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signup",
        { username , email, password }
      );

      console.log(response.data.message);
      alert("Account created successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create");
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-green-600 font-extrabold text-4xl sm:text-5xl mt-7">New Account</h1>
        <p className="text-gray-600 text-xl mt-2">Please enter your Information below</p>
      </div>

      <form>
        <div className="max-w-lg mx-auto mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Full Name" className="border border-gray-400 py-3 px-4 rounded w-full"
              value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" placeholder="Email" className="border border-gray-400 py-3 px-4 rounded w-full" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="border border-gray-400 py-3 px-4 rounded w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" placeholder="Phone Number" className="border border-gray-400 py-3 px-4 rounded w-full"/>
            <input type="date" placeholder="Date of Birth"className="border border-gray-400 py-3 px-4 rounded w-full text-gray-600"/>
            <select name="Gender" className="border border-gray-400 py-3 px-4 rounded w-full text-gray-600">
              <option value="Gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex gap-2 text-gray-600">
            <input type="checkbox" className="w-6 h-5" />
            <p>
              I agree to <span className="font-bold">Terms & Conditions</span> </p>
          </div>

          <button
  type="button"
  className="w-full sm:w-auto bg-green-300 px-8 py-3 text-gray-600 text-lg rounded cursor-pointer hover:bg-green-100 transition-all duration-300 ease-in-out"
  onClick={handleAccount}>
  Create Account
</button>
        </div>

        <p className="text-gray-400 ml-160 mt-6 text-center sm:text-left">
          Already have an Account?
          <Link to="/login">
            <span className="underline text-gray-600 cursor-pointer ml-2">
              Login
            </span>
          </Link>
        </p>
      </form>

      <Footer />
    </>
  );
};

export default Account;
