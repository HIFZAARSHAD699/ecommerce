import React, { useContext } from "react";
import cleaner from "../../assets/house/cleaner.jpg";
import floor from "../../assets/house/floor.jpg";
import rose from "../../assets/house/rose.jpg";
import petal from "../../assets/house/petal.jpg";
import surf from "../../assets/house/surf.jpg";
import bonus from "../../assets/house/bonus.jpg";
import flask from "../../assets/house/flask.jpg";
import oilbrush from "../../assets/house/oilbrush.jpg";
import air from "../../assets/house/air.jpg";
import freshner from "../../assets/house/freshner.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";

const products = [
  { id: 1, image: floor, name: "Dettol Multipurpose Cleaner Aqua 1 Liter", price: 1375 },
  { id: 2, image: rose, name: "Rose Petal Kitchen Towel Zoop", price: 227 },
  { id: 3, image: petal, name: "Rose Petal Party Pack White 300S", price: 235 },
  { id: 4, image: surf, name: "Surf Excel Washing Powder 1KG", price: 315 },
  { id: 5, image: bonus, name: "Bonus Active Top Load Detergent 750GM", price: 999 },
  { id: 6, image: air, name: "Fine Dreaming Air Freshener Cool Summer 300ML", price: 225 },
  { id: 7, image: freshner, name: "Fine Dreaming Air Freshener Lavender 300ML", price: 225 },
  { id: 8, image: cleaner, name: "Fine Dreaming Glass and Window Cleaner 500ML", price: 195 },
  { id: 9, image: flask, name: "Flask 1.9 Ltr", price: 4299 },
  { id: 10, image: oilbrush, name: "Silicon Oil Brush", price: 402 },
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

const House = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <p className="text-gray-700 text-3xl font-bold mt-4 mx-10">Household Items</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mx-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default House;
