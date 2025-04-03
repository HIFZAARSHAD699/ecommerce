import React, { useContext } from "react";
import beauty from "../../assets/beauty.jpg";
import menbodywash from "../../assets/beauty/menbodywash.jpg";
import showermouse from "../../assets/beauty/showermouse.jpg";
import creamesoap from "../../assets/beauty/creamesoap.jpg";
import hair from "../../assets/beauty/hair.jpg";
import dettol from "../../assets/beauty/dettol.png";
import caro from "../../assets/beauty/caro.jpg";
import cocoa from "../../assets/beauty/cocoa.jpg";
import bodywash from "../../assets/beauty/bodywash.jpg";
import pumpbottle from "../../assets/beauty/pumpbottle.jpg";
import showergel from "../../assets/beauty/showergel.jpg";
import soap from "../../assets/beauty/soap.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";

const products = [
  { id: 1, name: "Nivea Men Shaving Foam", price: 2500, image: menbodywash },
  { id: 2, name: "Nivea Shower Mouse", price: 3000, image: showermouse },
  { id: 3, name: "Garnier Color Naturals", price: 2200, image: creamesoap },
  { id: 4, name: "Hair Grow Treatments", price: 2582, image: hair },
  { id: 5, name: "Dettol Liquid 500ml", price: 290, image: dettol },
  { id: 6, name: "Olay Body Wash", price: 5000, image: bodywash },
  { id: 7, name: "Caro Shower Gel Soap", price: 5742, image: caro },
  { id: 8, name: "Palmolive Natural Soap", price: 1000, image: soap },
  { id: 9, name: "Cocoa Butter", price: 2869, image: cocoa },
  { id: 10, name: "Pump Bottle", price: 1000, image: pumpbottle },
  { id: 11, name: "Shower Gel Bottle", price: 1200, image: showergel },
];

const ProductCard = ({ product, dispatch }) => (
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
      onClick={() => dispatch({ type: "add", product :product })}
    >
      Add to Cart
    </button>
    <button className="p-3 w-full text-lg mt-2 bg-gray-200 cursor-pointer">
      Quick View
    </button>
  </div>
);

const Beauty = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <img src={beauty} alt="not available" className="w-screen h-[35rem] object-cover" />

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Beauty & Personal Care
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        Shop our collections of different varieties of Beauty & Personal Care
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 mx-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Beauty;
