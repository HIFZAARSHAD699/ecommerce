import React, { useContext, useState } from "react";
import sufi from "../../assets/frozen/sufi.jpg";
import bigbird from "../../assets/frozen/bigbird.jpg";
import susamosa from "../../assets/frozen/susamosa.jpg";
import plain from "../../assets/frozen/plain.jpg";
import opa from "../../assets/frozen/opa.jpg";
import popcorn from "../../assets/frozen/popcorn.jpg";
import fish from "../../assets/frozen/fish.jpg";
import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
  { id: 78, image: sufi, name: "Simply Sufi Chicken Nuggets 1KG", price: 949 },
  { id: 79, image: bigbird, name: "Big Bird Budget Pack Nuggets 1000 GM", price: 765 },
  { id: 80, image: susamosa, name: "Simply Sufi Punjabi Samosa 400 GM", price: 369 },
  { id: 81, image: plain, name: "Dawn Paratha Plain 5PCS", price: 245 },
  { id: 82, image: popcorn, name: "Menu Pop Corn Fish 500 GM", price: 1125 },
  { id: 83, image: fish, name: "Mon Salwa Breaded Fish Fillet 300GM", price: 499 },
  { id: 84, image: opa, name: "OPA Sweet Corn 1KG", price: 770 },
];

const Frozen = () => {
  const { dispatch } = useContext(cartContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <>


      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Frozen Foods
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        Shop our frozen food essentials for quick, easy, and delicious meals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 mx-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            dispatch={dispatch}
            handleQuickView={handleQuickView}
          />
        ))}
      </div>

      <QuickViewModal product={quickViewProduct} onClose={closeQuickView} />
      <Footer />
    </>
  );
};

export default Frozen;
