import React, { useContext } from "react";
import dalda from "../../assets/wholesale/dalda.jpg";
import coke from "../../assets/wholesale/coke.jpg";
import juice from "../../assets/wholesale/juice.jpg";
import pencil from "../../assets/wholesale/pencil.jpg";
import rice from "../../assets/wholesale/rice.jpg";
import bottleset from "../../assets/wholesale/bottleset.jpg";
import brush from "../../assets/wholesale/brush.jpg";
import egg from "../../assets/wholesale/eggs.jpg";
import mask from "../../assets/wholesale/mask.jpg";
import wholesale from "../../assets/wholesale.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";

const products = [
  { id: 1, image: dalda, name: "Dalda Oil Bottles & Cans", price: 2190 },
  { id: 2, image: coke, name: "Cola Next Bundle", price: 3000 },
  { id: 3, image: pencil, name: "Pencil Set", price: 2500 },
  { id: 4, image: rice, name: "Basmati Rice Wholesale", price: 6690 },
  { id: 5, image: bottleset, name: "Shampoo Bottle Set", price: 2500 },
  { id: 6, image: brush, name: "Bamboo Brush Set", price: 3000 },
  { id: 7, image: egg, name: "Eggs Three Dozen", price: 1460 },
  { id: 8, image: mask, name: "Disposable Masks Boxes", price: 600 },
  { id: 9, image: juice, name: "Nestle Fruita Vitle Mango Juice", price: 2000 }
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

const Wholesale = () => {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <img src={wholesale} alt="Wholesale Banner" className="w-screen h-[35rem] object-cover" />
      
      <div className="mx-10 mt-6">
        <p className="text-gray-700 text-3xl font-bold">Fast & Convenient Local Delivery or Pickup!</p>
        <p className="text-gray-500 mt-4">
          Get your favorite products quickly and hassle-free! We are excited to offer local delivery and store pickup
          options to our customers. Choose delivery for the convenience of having items brought right to your door, or
          swing by for a quick and easy pickup. Supporting your local favorites has never been easier!
        </p>
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

export default Wholesale;
