import React, { useContext, useState } from "react";
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
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
  { id: 96, image: dayfresh, name: "Day Fresh Choco Milk 235 ML X 12", price: 1025 },
  { id: 97, image: milo, name: "Nestle Milo Milk Chocolate 180ML", price: 94 },
  { id: 98, image: omung, name: "Dairy Omung Dairy Drink 1.5 Litre", price: 170 },
  { id: 99, image: oats, name: "Nature Own White Oats Pouch 500GM", price: 495 },
  { id: 100, image: choco, name: "Fauji Chocolate Cups 250GM", price: 799 },
  { id: 101, image: corn, name: "Fauji Corn Flakes 250 GM", price: 425 },
  { id: 102, image: blueband, name: "Blue Band Margarine Tub 500 GM", price: 875 },
  { id: 103, image: olivegrove, name: "Olive Grove Spread Lite 500 GM", price: 1665 },
  { id: 104, image: eggspack, name: "Packed Eggs 90", price: 2225 },
  { id: 105, image: milkpackyogurt, name: "Nestle Milkpak Yogurt 900GM", price: 359 },
  { id: 106, image: cheese, name: "Adams Cheese Pizza 200 GM", price: 1025 },
  { id: 107, image: sandwich, name: "Adams Sandwich Cheese Slices 200 GM", price: 630 },
];

const Dairy = () => {
  const { dispatch } = useContext(cartContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <>

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Dairy Products
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        Browse our fresh and essential dairy items to keep your meals healthy and tasty.
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

export default Dairy;
