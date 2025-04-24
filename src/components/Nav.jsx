import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from '../features/ContextProvider';
import { SearchContext } from '../features/SearchContext';
import { products } from '../components/pages/ProductsData'; 

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Nav = () => {
  const { cart } = useContext(cartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const filteredSuggestions = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProduct = (productId) => {
    setShowDropdown(false);
    setSearchTerm(""); 
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <nav className="bg-green-600 text-gray-700 text-base sm:text-lg md:text-xl font-bold text-center p-2">
        ETHICALLY SOURCED GOODS
      </nav>

      <div className="bg-green-300 p-4 flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 relative">
        <h2 className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">
          Pakistan Grocery Store
        </h2>

        
        <div className="relative w-full lg:w-auto flex justify-center lg:justify-start">
          <input
            className="bg-white text-gray-900 px-4 py-2 w-full sm:w-80 md:w-96 lg:w-[30rem] rounded-md border border-gray-400"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            value={searchTerm}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer" />

         
          {showDropdown && searchTerm && filteredSuggestions.length > 0 && (
            <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md z-10 max-h-60 overflow-y-auto shadow-md">
              {filteredSuggestions.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-800"
                  onClick={() => handleSelectProduct(product.id)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-5 sm:gap-8 mt-4 lg:mt-0">
          <div className='flex flex-col items-center'>
            <Link to="/location" className="flex flex-col items-center">
              <IoLocation className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900 cursor-pointer" />
              <p className="text-gray-700 text-sm sm:text-base">Store Location</p>
            </Link>
          </div>
          <p className="hidden sm:block text-gray-700 text-xl font-light">|</p>
          <div className='flex flex-col items-center'>
            <Link to="/login" className="flex flex-col items-center">
              <MdAccountCircle className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900 cursor-pointer" />
              <p className="text-gray-700 text-sm sm:text-base">Login/Signup</p>
            </Link>
          </div>
          <p className="hidden sm:block text-gray-700 text-xl font-light">|</p>
          <div className='flex flex-col items-center'>
            <Link to="/cart" className="flex flex-col items-center relative">
              <span className="absolute -top-3 -right-1 bg-slate-500 text-white  text-sm px-2 py-0.5 rounded-full">{cart.length}</span>
              <FaShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900 cursor-pointer" />
              <p className="text-gray-700 text-sm sm:text-base">Add To Cart</p>
            </Link>
          </div>
        </div>
      </div>

    
      <div className="bg-slate-100 text-gray-700 p-5 overflow-x-auto">
        <ul className="flex gap-x-6 sm:gap-x-10 text-sm sm:text-base px-2 whitespace-nowrap">
          <li><Link to="/food">Food & Groceries</Link></li>
          <li><Link to="/Beauty">Beauty & Personal Care</Link></li>
          <li><Link to="/Garden">Home & Garden</Link></li>
          <li><Link to="/Wholesale">Wholesale</Link></li>
          <li><Link to="/Toys">Toys</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
