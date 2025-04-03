import React, { useContext } from "react";
import ludo from "../../assets/garden/ludo.jpg";
import watering from "../../assets/garden/watering.jpg";
import tradpot from "../../assets/garden/tradpot.jpg";
import tapoly from "../../assets/garden/tapoly.png";
import prayer from "../../assets/garden/prayer.jpg";
import candle from "../../assets/garden/candle.jpg";
import mop from "../../assets/garden/mop.jpg";
import trendy from "../../assets/garden/trendy.jpg";
import lime from "../../assets/garden/lime.jpg";
import barrel from "../../assets/garden/barrel.jpg";
import garden from "../../assets/home.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";


const products = [
  { id: 1, name: "Ludo Board Game", price: 2190, image: ludo },
  { id: 2, name: "African Watering Can", price: 3742, image: watering },
  { id: 3, name: "Asanka Traditional Pot", price: 3167, image: tradpot },
  { id: 4, name: "Tapoli", price: 969, image: tapoly },
  { id: 5, name: "Prayer Mat", price: 2290, image: prayer },
  { id: 6, name: "Clear Glass Ivory Candle", price: 1200, image: candle },
  { id: 7, name: "Cotton Mop", price: 1000, image: mop },
  { id: 8, name: "Trendy Planter", price: 3000, image: trendy },
  { id: 9, name: "Lime Sun Lounger", price: 15000, image: lime },
  { id: 10, name: "Barrel Planter", price: 8240, image: barrel },
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

   
    <button
      className="bg-green-300 p-3 w-full text-lg mt-2 cursor-pointer"
      onClick={() => dispatch({ type: "add", payload: { product } })} >
      Add to Cart
    </button>
    <button className="p-3 w-full text-lg mt-2 bg-gray-200 cursor-pointer">
      Quick View
    </button>
  </div>
);

const Garden = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      
      <img
        src={garden}
        alt="not available"
        className="w-screen h-[35rem] object-cover"
      />

      
      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Home & Garden
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        Shop our collections of different varieties of Home and Garden essentials.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 mx-10">
        {products.map((product) => (
          <ProductCard key={`product-${product.id}`} product={product} dispatch={dispatch} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Garden;
