import React, { useContext } from "react";
import reddie from "../../assets/gifts/reddie.jpg";
import spider from "../../assets/gifts/spider.jpg";
import spidy from "../../assets/gifts/spidy.jpg";
import miraculous from "../../assets/gifts/miraculous.jpg";
import blocks from "../../assets/gifts/blocks.jpg";
import infinitywar from "../../assets/gifts/infinitywar.jpg";
import soldiers from "../../assets/gifts/soldiers.jpg";
import minecraft from "../../assets/gifts/minecraft.jpg";
import barbie from "../../assets/gifts/barbie.jpg";
import doll from "../../assets/gifts/doll.jpg";
import set from "../../assets/gifts/set.jpg";
import doreamon from "../../assets/gifts/doreamon.jpg";
import pushgame from "../../assets/gifts/pushgame.jpg";
import fidget from "../../assets/gifts/fidget.jpg";
import relief from "../../assets/gifts/relief.jpg";
import toys from "../../assets/toys.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";

const products = [
  { id: 1, image: reddie, name: "Raddy Sprunki", price: 990 },
  { id: 2, image: miraculous, name: "Miraculous Toys", price: 1090 },
  { id: 3, image: blocks, name: "Building Blocks 6+", price: 1500 },
  { id: 4, image: infinitywar, name: "Infinity War Set", price: 1180 },
  { id: 5, image: spider, name: "Spider Man", price: 800 },
  { id: 6, image: soldiers, name: "Lego Soldiers", price: 1350 },
  { id: 7, image: minecraft, name: "Minecraft Toys", price: 1650 },
  { id: 8, image: spidy, name: "Spider Man Plush", price: 650 },
  { id: 9, image: barbie, name: "Barbie Set", price: 1850 },
  { id: 10, image: relief, name: "Silicon Fidget", price: 1350 },
  { id: 11, image: doll, name: "Barbie Doll", price: 1250 },
  { id: 12, image: pushgame, name: "Push Game", price: 6000 },
  { id: 13, image: doreamon, name: "Doreamon Telephone", price: 1050 },
  { id: 14, image: set, name: "Barbie Set", price: 1000 },
  { id: 15, image: fidget, name: "Fidget", price: 850 },
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

const Toys = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <img src={toys} alt="Toys Banner" className="w-screen h-[35rem] object-cover" />

      <div className="mx-10 mt-6">
        <p className="text-gray-700 text-3xl font-bold">Toys for Children</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mx-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Toys;
