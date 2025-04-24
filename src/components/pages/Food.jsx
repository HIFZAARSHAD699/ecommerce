import React, { useContext, useState } from "react";
import groimg from "../../assets/gro.jpg";
import flour from "../../assets/flour.jpg";
import tea from "../../assets/herbaltea.jpg";
import cocoa from "../../assets/cocoa.jpg";
import beans from "../../assets/beans.jpg";
import eggplant from "../../assets/eggplant.jpg";
import yellowtea from "../../assets/yellowtea.png";
import eyed from "../../assets/eyed.jpg";
import noodles from "../../assets/noodles.jpg";
import greentea from "../../assets/greentea.jpg";
import okra from "../../assets/okra.jpg";
import samosa from "../../assets/samosa.jpg";
import whiteflour from "../../assets/whiteflour.jpg";
import ricepowder from "../../assets/ricepowder.png";
import ramen from "../../assets/ramen.png";
import croquettes from "../../assets/croquettes.jpg";
import oreo from "../../assets/oreo.jpg";
import milka from "../../assets/milka.jpg";
import chocolate from "../../assets/chocolate.jpg";
import lays from "../../assets/lays.jpg";
import yogurt from "../../assets/yogurt.jpg";
import salt from "../../assets/salt.jpg";
import feast from "../../assets/feast.png";

import Footer from "../Footer";
import { cartContext } from "../../features/ContextProvider";
import { SearchContext } from "../../features/SearchContext";
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
  { id: 1, name: "Ghana Gari 5lbs", price: 160, image: flour },
  { id: 2, name: "3 Ballerina Herbal Tea", price: 119, image: tea },
  { id: 3, name: "Natural Cocoa Powder", price: 179, image: cocoa },
  { id: 4, name: "African Brown Beans 5lb", price: 199, image: beans },
  { id: 5, name: "Eggs-Eggplant", price: 109, image: eggplant },
  { id: 6, name: "Lipton Yellow Label Tea", price: 120, image: yellowtea },
  { id: 7, name: "Black Eye Beans", price: 120, image: eyed },
  { id: 8, name: "Indomie noodles", price: 420, image: noodles },
  { id: 9, name: "Lipton Green Tea", price: 720, image: greentea },
  { id: 10, name: "Okra / Bhindi per Kg", price: 820, image: okra },
  { id: 11, name: "Big Bird Samosa", price: 1120, image: samosa },
  { id: 12, name: "White Flour", price: 720, image: whiteflour },
  { id: 13, name: "Rice Powder", price: 720, image: ricepowder },
  { id: 14, name: "Ramen Noodles", price: 920, image: ramen },
  { id: 15, name: "Big Bird Croquettes", price: 1020, image: croquettes },
  { id: 16, name: "Oreo Biscuit", price: 150, image: oreo },
  { id: 17, name: "Chocolate Milk Bar", price: 550, image: milka },
  { id: 18, name: "Dairy Milk Chocolate", price: 200, image: chocolate },
  { id: 19, name: "Lays", price: 50, image: lays },
  { id: 20, name: "Kurleez Greek Yogurt", price: 1000, image: yogurt },
  { id: 21, name: "Sea Salt", price: 430, image: salt },
  { id: 22, name: "Feast Ice Cream", price: 320, image: feast },
];

const Food = () => {
  const { dispatch } = useContext(cartContext);
  const { searchTerm } = useContext(SearchContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <img
        src={groimg}
        alt="Groceries Banner"
        className="w-screen h-[35rem] object-cover"
      />

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Discover Authentic African Flavors in Every Aisle
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        At Pakistan Grocery Store, our grocery section is a treasure trove of
        authentic foods and pantry staples that bring the rich and diverse
        flavors of the continent straight to your kitchen.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 mx-10">
        {filteredProducts.map((product) => (
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

export default Food;
