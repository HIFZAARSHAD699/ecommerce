import React, { useContext } from "react";
import awamirice from "../../assets/flour/awamirice.jpg";
import basmati from "../../assets/flour/basmati.jpg";
import kainatrice from "../../assets/flour/kainatrice.jpg";
import premium from "../../assets/flour/premium.jpg";
import sella from "../../assets/flour/sella.jpg";
import white from "../../assets/flour/white.jpg";
import lobia from "../../assets/flour/lobia.jpg";
import whitechanna from "../../assets/flour/whitechanna.jpg";
import baisan from "../../assets/flour/baisan.jpg";
import sunridge from "../../assets/flour/sunridge.jpg";
import cornflour from "../../assets/flour/cornflour.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";

const products = [
  { id: 1, name: "Awami Rice 1Kg", price: 386, image: awamirice },
  { id: 2, name: "Guard Basmati Rice", price: 2099, image: basmati },
  { id: 3, name: "Falak Premium Pack 5KG", price: 1849, image: premium },
  { id: 4, name: "Fine Life Kainat Sella Rice", price: 270, image: sella },
  { id: 5, name: "Ok White Chana Big", price: 325, image: white },
  { id: 6, name: "Red Lobia Per 500GM", price: 449, image: lobia },
  { id: 7, name: "White Chana Small 1Kg", price: 285, image: whitechanna },
  { id: 8, name: "Fine Life Baisan 1KG", price: 185, image: baisan },
  { id: 9, name: "SUNRIDGE Chakki Atta", price: 525, image: sunridge },
  { id: 10, name: "Rafhan Corn Flour 285GM", price: 155, image: cornflour },
  { id: 11, name: "Kainat Steamed Rice 1KG", price: 285, image: kainatrice },
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

const FlourRice = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <p className="text-gray-700 text-3xl font-bold mt-4 mx-10">
        Flour, Rice & Pulses
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mx-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default FlourRice;
