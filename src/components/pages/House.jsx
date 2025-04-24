import React, { useContext, useState } from "react";
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
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
  { id: 68, image: floor, name: "Dettol Multipurpose Cleaner Aqua 1 Liter", price: 1375 },
  { id: 69, image: rose, name: "Rose Petal Kitchen Towel Zoop", price: 227 },
  { id: 70, image: petal, name: "Rose Petal Party Pack White 300S", price: 235 },
  { id: 71, image: surf, name: "Surf Excel Washing Powder 1KG", price: 315 },
  { id: 72, image: bonus, name: "Bonus Active Top Load Detergent 750GM", price: 999 },
  { id: 73, image: air, name: "Fine Dreaming Air Freshener Cool Summer 300ML", price: 225 },
  { id: 74, image: freshner, name: "Fine Dreaming Air Freshener Lavender 300ML", price: 225 },
  { id: 75, image: cleaner, name: "Fine Dreaming Glass and Window Cleaner 500ML", price: 195 },
  { id: 76, image: flask, name: "Flask 1.9 Ltr", price: 4299 },
  { id: 77, image: oilbrush, name: "Silicon Oil Brush", price: 402 },
];

const House = () => {
  const { dispatch } = useContext(cartContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <>

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">Household Items</p>
      <p className="text-gray-500 mt-4 mx-12">
        Discover essential items to keep your home fresh, clean, and comfortable.
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

export default House;
