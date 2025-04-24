import React, { useContext, useState } from "react";
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
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
 { id: 34, name: "Ludo Board Game", price: 2190, image: ludo },
   { id: 35, name: "African Watering Can", price: 3742, image: watering },
   { id: 36, name: "Asanka Traditional Pot", price: 3167, image: tradpot },
   { id: 37, name: "Tapoli", price: 969, image: tapoly },
   { id: 38, name: "Prayer Mat", price: 2290, image: prayer },
   { id: 39, name: "Clear Glass Ivory Candle", price: 1200, image: candle },
   { id: 40, name: "Cotton Mop", price: 1000, image: mop },
   { id: 41, name: "Trendy Planter", price: 3000, image: trendy },
   { id: 42, name: "Lime Sun Lounger", price: 15000, image: lime },
   { id: 43, name: "Barrel Planter", price: 8240, image: barrel },
];

const Garden = () => {
  const { dispatch } = useContext(cartContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

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

export default Garden;
