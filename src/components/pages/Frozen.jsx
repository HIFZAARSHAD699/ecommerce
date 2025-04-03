import React, { useContext } from "react";
import sufi from "../../assets/frozen/sufi.jpg";
import bigbird from "../../assets/frozen/bigbird.jpg";
import susamosa from "../../assets/frozen/susamosa.jpg";
import plain from "../../assets/frozen/plain.jpg";
import opa from "../../assets/frozen/opa.jpg";
import popcorn from "../../assets/frozen/popcorn.jpg";
import fish from "../../assets/frozen/fish.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";

const frozenProducts = [
  { id: 1, image: sufi, name: "Simply Sufi Chicken Nuggets 1KG", price: 949 },
  { id: 2, image: bigbird, name: "Big Bird Budget Pack Nuggets 1000 GM", price: 765 },
  { id: 3, image: susamosa, name: "Simply Sufi Punjabi Samosa 400 GM", price: 369 },
  { id: 4, image: plain, name: "Dawn Paratha Plain 5PCS", price: 245 },
  { id: 5, image: popcorn, name: "Menu Pop Corn Fish 500 GM", price: 1125 },
  { id: 6, image: fish, name: "Mon Salwa Breaded Fish Fillet 300GM", price: 499 },
  { id: 7, image: opa, name: "OPA Sweet Corn 1KG", price: 770 },
];

const ProductCard = ({ product, dispatch }) => (
  <div className="border p-4 shadow-lg rounded-lg text-center">
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
      onClick={() => dispatch({ type: "add", product: product })}
    >
      Add to Cart
    </button>
    <button className="p-3 w-full text-lg mt-2 bg-gray-200 cursor-pointer">
      Quick View
    </button>
  </div>
);

const Frozen = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <p className="text-gray-700 text-3xl font-bold mt-4 mx-10">Frozen Foods</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mx-10">
        {frozenProducts.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Frozen;
