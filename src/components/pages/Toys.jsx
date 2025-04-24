import React, { useContext, useState } from "react";
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
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
  { id: 53, image: reddie, name: "Raddy Sprunki", price: 990 },
  { id: 54, image: miraculous, name: "Miraculous Toys", price: 1090 },
  { id: 55, image: blocks, name: "Building Blocks 6+", price: 1500 },
  { id: 56, image: infinitywar, name: "Infinity War Set", price: 1180 },
  { id: 57, image: spider, name: "Spider Man", price: 800 },
  { id: 58, image: soldiers, name: "Lego Soldiers", price: 1350 },
  { id: 59, image: minecraft, name: "Minecraft Toys", price: 1650 },
  { id: 60, image: spidy, name: "Spider Man Plush", price: 650 },
  { id: 61, image: barbie, name: "Barbie Set", price: 1850 },
  { id: 62, image: relief, name: "Silicon Fidget", price: 1350 },
  { id: 63, image: doll, name: "Barbie Doll", price: 1250 },
  { id: 64, image: pushgame, name: "Push Game", price: 6000 },
  { id: 65, image: doreamon, name: "Doreamon Telephone", price: 1050 },
  { id: 66, image: set, name: "Barbie Set", price: 1000 },
  { id: 67, image: fidget, name: "Fidget", price: 850 },
];

const Toys = () => {
  const { dispatch } = useContext(cartContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <>
      <img
        src={toys}
        alt="Toys Banner"
        className="w-screen h-[35rem] object-cover"
      />

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Toys for Children
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        Explore our fun collection of kids’ toys that encourage imagination and play—from action figures to brain-boosting blocks.
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

export default Toys;
