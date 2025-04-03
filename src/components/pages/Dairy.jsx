import React, { useContext } from "react";
import dayfresh from "../../assets/dairy/dayfresh.jpg";
import milo from "../../assets/dairy/milo.jpg";
import omung from "../../assets/dairy/omung.jpg";
import oats from "../../assets/dairy/oats.jpg";
import choco from "../../assets/dairy/choco.jpg";
import corn from "../../assets/dairy/corn.jpg";
import blueband from "../../assets/dairy/blueband.jpg";
import olivegrove from "../../assets/dairy/olivegrove.jpg";
import eggspack from "../../assets/dairy/eggspack.jpg";
import milkpackyogurt from "../../assets/dairy/milkpakyogurt.jpg";
import cheese from "../../assets/dairy/cheese.jpg";
import sandwich from "../../assets/dairy/sandwich.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";

const dairyProducts = [
  { id: 1, image: dayfresh, name: "Day Fresh Choco Milk 235 ML X 12", price: 1025 },
  { id: 2, image: milo, name: "Nestle Milo Milk Chocolate 180ML", price: 94 },
  { id: 3, image: omung, name: "Dairy Omung Dairy Drink 1.5 Litre", price: 170 },
  { id: 4, image: oats, name: "Nature Own White Oats Pouch 500GM", price: 495 },
  { id: 5, image: choco, name: "Fauji Chocolate Cups 250GM", price: 799 },
  { id: 6, image: corn, name: "Fauji Corn Flakes 250 GM", price: 425 },
  { id: 7, image: blueband, name: "Blue Band Margarine Tub 500 GM", price: 875 },
  { id: 8, image: olivegrove, name: "Olive Grove Spread Lite 500 GM", price: 1665 },
  { id: 9, image: eggspack, name: "Packed Eggs 90", price: 2225 },
  { id: 10, image: milkpackyogurt, name: "Nestle Milkpak Yogurt 900GM", price: 359 },
  { id: 11, image: cheese, name: "Adams Cheese Pizza 200 GM", price: 1025 },
  { id: 12, image: sandwich, name: "Adams Sandwich Cheese Slices 200 GM", price: 630 },
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
      onClick={() => dispatch({ type: "add", product :product })}
    >
      Add to Cart
    </button>
    <button className="p-3 w-full text-lg mt-2 bg-gray-200 cursor-pointer">
      Quick View
    </button>
  </div>
);

const Dairy = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <p className="text-gray-700 text-3xl font-bold mt-4 mx-10">Dairy Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mx-10">
        {dairyProducts.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Dairy;
