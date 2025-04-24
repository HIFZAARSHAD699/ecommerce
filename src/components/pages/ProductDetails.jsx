import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../pages/ProductsData';
import { cartContext } from "../../features/ContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find(p => p.id === productId);
  const { dispatch } = useContext(cartContext);

 
  return (
    <div className="max-w-md mx-auto mt-10 border p-4 shadow-lg rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-auto transition duration-100 ease-in hover:scale-105 cursor-pointer mx-auto"
      />
      <p className="text-gray-600 font-bold mt-4 text-2xl text-center">{product.name}</p>
      <span className="text-blue-950 text-xl block text-center mt-1">PKR {product.price}</span>

      <button
        className="bg-green-300 p-3 w-full text-lg mt-4 cursor-pointer"
        onClick={() => dispatch({ type: "add", product })}> Add to Cart</button>

    </div>
  );
};

export default ProductDetails;
