import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../../features/ContextProvider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "../../features/CartReducer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; 

const Cart = () => {
  const { cart } = useContext(cartContext);
  const navigate = useNavigate();  
  
  const handleCart = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before proceeding.");
      return;
    }
  
    try {
      for (const product of cart) {
        
        if (!product._id && !product.id) {
          alert("Product ID is missing for some items in your cart.");
          return;
        }
  
        const token = localStorage.getItem("token");
        await axios.post(
          "http://localhost:3000/api/cart/create",
          {
            product_id: product._id || product.id, 
            quantity: product.quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
      }
  
      alert("Cart saved successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create cart");
      
      navigate("/login"); 
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {cart.length > 0 ? (
            <>
              {cart.map((product, index) => (
                <CartProduct key={`${product.id}-${index}`} product={product} />
              ))}
            </>
          ) : (
            <p className="text-center text-gray-600 text-lg">Your Cart is Empty.</p>
          )}
        </div>

        <div className="md:col-span-1 bg-gray-100 p-6 mt-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <p>Total Items: {totalItem(cart)}</p>
          <p>Total Price: PKR {totalPrice(cart)}</p>

          <button 
            className="w-full bg-green-400 text-gray-600 py-2 mt-4 rounded-md"
            onClick={handleCart}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
