import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { cartContext } from '../features/ContextProvider';


import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdAccountCircle, MdSupportAgent, MdOutlinePayment } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";



const Nav = () => {
  const { cart } = useContext(cartContext); 




  return (
    <>
      <nav className="bg-green-600 text-gray-700 text-xl font-bold text-center p-2">
        ETHICALLY SOURCED GOODS
      </nav>


      <div className="bg-green-300 p-4 flex items-center space-x-8">
        <h2 className="text-gray-700 text-3xl font-bold">Pakistan Grocery Store</h2>


        <div className="flex items-center space-x-20">
         
          <div className="relative flex items-center">
           
            <input
              className="bg-white text-gray-900 px-4 py-2 w-120 rounded-md border border-gray-400" type="text" placeholder="Search..." />
            <FaSearch className="absolute right-3 w-6 h-6 text-gray-600 cursor-pointer" />
             </div>
        </div>


        <div className="flex items-center  gap-13">
          <div className='flex'>
        <Link to="/location">
          <IoLocation className="w-7 h-7 text-gray-900 ml-8 cursor-pointer" />
         
          <p className="text-gray-700 text-lg"> Store Location</p></Link>
          </div>
          <p className="text-gray-700 text-2xl font-light">|</p>
          <Link to="/login">
            <MdAccountCircle className="w-7 h-7 text-gray-900 ml-8 cursor-pointer" />
            <p className="text-gray-700 text-lg">Login/Signup</p>
          </Link>


          <p className="text-gray-700 text-2xl font-light">|</p>


          <Link to="/cart">
            <span className="ml-4"> {cart.length}</span>
            <FaShoppingCart className="w-7 h-7 text-gray-900 cursor-pointer" />
            <p className="text-gray-700 text-lg">Add To Cart</p>
          </Link>
        </div>
      </div>




      <div className="bg-slate-100 text-gray-700 p-5">
        <ul className="flex ml-7 gap-x-10 cursor-pointer">
          <li>
            <Link to="/food">Food & Groceries</Link>
          </li>
          <li>
            <Link to="/Beauty">Beauty & Personal Care</Link>
          </li>
          <li>
            <Link to="/Garden">Home & Garden</Link>
          </li>
          <li>
            <Link to="/Wholesale">Wholesale</Link>
          </li>
          <li>
            <Link to="/Toys">Toys</Link>
          </li>
        </ul>
      </div>
    </>
  );
};


export default Nav;



