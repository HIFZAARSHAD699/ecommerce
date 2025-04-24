import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, dispatch }) => {
  const navigate = useNavigate();
  

  return (
    <div className="border p-4 shadow-lg rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-auto transition duration-100 ease-in hover:scale-105 cursor-pointer mx-auto"
      />
      <p className="text-gray-600 font-bold mt-2 text-2xl">{product.name}</p>
      <span className="text-blue-950 text-xl">PKR {product.price}</span>
      <br />
      <button
        className="bg-green-300 p-3 w-full text-lg mt-2 cursor-pointer"
        onClick={() => dispatch({ type: "add", product })}>
        Add to Cart</button>

      <button
        className="p-3 w-full text-lg mt-2 bg-gray-200 cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)} >
        Quick View </button>
    </div>
  );
};

export default ProductCard;
