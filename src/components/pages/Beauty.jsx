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
import { SearchContext } from "../../features/SearchContext";
import ProductCard from "../pages/ProductCard";


const products = [
  { id: 23, name: "Nivea Men Shaving Foam", price: 2500, image: menbodywash },
  { id: 24, name: "Nivea Shower Mouse", price: 3000, image: showermouse },
  { id: 25, name: "Garnier Color Naturals", price: 2200, image: creamesoap },
  { id: 26, name: "Hair Grow Treatments", price: 2582, image: hair },
  { id: 27, name: "Dettol Liquid 500ml", price: 290, image: dettol },
  { id: 28, name: "Olay Body Wash", price: 5000, image: bodywash },
  { id: 29, name: "Caro Shower Gel Soap", price: 5742, image: caro },
  { id: 30, name: "Palmolive Natural Soap", price: 1000, image: soap },
  { id: 31, name: "Cocoa Butter", price: 2869, image: cocoa },
  { id: 32, name: "Pump Bottle", price: 1000, image: pumpbottle },
  { id: 33, name: "Shower Gel Bottle", price: 1200, image: showergel },
];

const Beauty = () => {
  const { dispatch } = useContext(cartContext);
  const { searchTerm } = useContext(SearchContext);

  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <img
        src={beauty}
        alt="Beauty & Personal Care Banner"
        className="w-screen h-[35rem] object-cover"
      />

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Beauty & Personal Care
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        Shop our collection of different varieties of Beauty & Personal Care
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 mx-10">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            dispatch={dispatch}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Beauty;
