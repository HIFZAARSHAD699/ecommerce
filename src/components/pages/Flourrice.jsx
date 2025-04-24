import React, { useContext, useState } from "react";
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
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
  { id: 85, name: "Awami Rice 1Kg", price: 386, image: awamirice },
  { id: 86, name: "Guard Basmati Rice", price: 2099, image: basmati },
  { id: 87, name: "Falak Premium Pack 5KG", price: 1849, image: premium },
  { id: 88, name: "Fine Life Kainat Sella Rice", price: 270, image: sella },
  { id: 89, name: "Ok White Chana Big", price: 325, image: white },
  { id: 90, name: "Red Lobia Per 500GM", price: 449, image: lobia },
  { id: 91, name: "White Chana Small 1Kg", price: 285, image: whitechanna },
  { id: 92, name: "Fine Life Baisan 1KG", price: 185, image: baisan },
  { id: 93, name: "SUNRIDGE Chakki Atta", price: 525, image: sunridge },
  { id: 94, name: "Rafhan Corn Flour 285GM", price: 155, image: cornflour },
  { id: 95, name: "Kainat Steamed Rice 1KG", price: 285, image: kainatrice },
];

const FlourRice = () => {
  const { dispatch } = useContext(cartContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <>
    

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">Flour, Rice & Pulses</p>
      <p className="text-gray-500 mt-4 mx-12">
        Stock up on the finest grains, lentils, and flours for your daily needs.
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

export default FlourRice;
