import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom"; 
import flour from "../assets/flour.jpg";
import tea from "../assets/herbaltea.jpg";
import cocoa from "../assets/cocoa.jpg";
import beans from "../assets/beans.jpg";
import yogurt from "../assets/yogurt.jpg";
import whiteflour from "../assets/whiteflour.jpg";

import yellowtea from "../assets/yellowtea.png";
import frozen from "../assets/categories/frozen.jpg";
import dairy from "../assets/categories/dairy.jpg";
import house from "../assets/categories/house.jpg";
import flourrice from "../assets/categories/ricepulses.jpg";
import { cartContext } from "../features/ContextProvider";


const products = [
  { id: 1, name: "Ghana Gari 5lbs", price: 160, image: flour },
  { id: 2, name: "Sunridge whiteflour", price: 700, image: whiteflour },
  { id: 3, name: "Natural Cocoa Powder", price: 179, image: cocoa },
  { id: 4, name: "African Brown Beans 5lb", price: 199, image: beans },
  { id: 5, name: "Kurleez", price: 129, image: yogurt },
  { id: 6, name: "3 Ballerina Herbal Tea", price: 119, image: tea },
  { id: 7, name: "Lipton Yellow Label Tea", price: 120, image: yellowtea },
];


const Pic = () => {
  const scrollRef = useRef();
  const { dispatch } = useContext(cartContext);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <>
      <div className="mx-10 my-8">
        <p className="text-gray-700 text-3xl font-bold mt-4">Shop BestSellers</p>
        <div className="relative flex items-center mt-9">
          <button
            onClick={scrollLeft}
            className="absolute bg-gray-200 p-2 rounded-full hover:bg-green-200"
          >
            ◀
          </button>
          <div ref={scrollRef} className="flex overflow-x-auto gap-10 px-10 scrollbar-hide">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-60 ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-auto transition duration-200 ease-in hover:scale-105 cursor-pointer mx-auto"
                />
                <p className="text-gray-600 font-bold mt-2 text-lg">{product.name}</p>
                <span className="text-blue-950 text-xl">PKR {product.price}</span>
                <br />
                <button
                  className="bg-green-300 p-3 w-full text-lg mt-3 cursor-pointer"
                  onClick={() => dispatch({ type: "add", product :product })}
                >
                  Add to Cart
                </button>
                <button className="p-3 w-full text-lg mt-2 bg-gray-200 cursor-pointer">
                  Quick View
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 bg-gray-200 p-2 rounded-full hover:bg-green-200"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="mx-10 my-8">
    <p className="text-gray-700 text-3xl font-bold mt-4">Shop By Categories</p>
    <div className="flex mx-35 gap-20 mt-5 ">
      <Link to="/frozen">
      <img src={frozen} alt="not available" className="w-50 h-50  rounded-full cursor-pointer" /></Link>
      <Link to="/dairy">
      <img src={dairy} alt="not available" className="w-50 h-50  rounded-full cursor-pointer"/></Link>
      <Link to="/house">
      <img src={house} alt="not available" className="w-50 h-50  rounded-full cursor-pointer" /></Link>
      <Link to="/flourrice">
      <img src={flourrice} alt="not available"  className="w-50 h-50  rounded-full cursor-pointer"/></Link>


    </div>



      </div>
    </>
  );
};

export default Pic;
