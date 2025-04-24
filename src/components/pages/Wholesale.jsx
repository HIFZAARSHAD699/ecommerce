import React, { useContext, useState } from "react";
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
import ProductCard from "../pages/ProductCard";
import QuickViewModal from "../pages/QuickViewModal";

const products = [
  { id: 44, image: dalda, name: "Dalda Oil Bottles & Cans", price: 2190 },
  { id: 45, image: coke, name: "Cola Next Bundle", price: 3000 },
  { id: 46, image: pencil, name: "Pencil Set", price: 2500 },
  { id: 47, image: rice, name: "Basmati Rice Wholesale", price: 6690 },
  { id: 48, image: bottleset, name: "Shampoo Bottle Set", price: 2500 },
  { id: 49, image: brush, name: "Bamboo Brush Set", price: 3000 },
  { id: 50, image: egg, name: "Eggs Three Dozen", price: 1460 },
  { id: 51, image: mask, name: "Disposable Masks Boxes", price: 600 },
  { id: 52, image: juice, name: "Nestle Fruita Vitle Mango Juice", price: 2000 },
];

const Wholesale = () => {
  const { dispatch } = useContext(cartContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <>
      <img
        src={wholesale}
        alt="Wholesale Banner"
        className="w-screen h-[35rem] object-cover"
      />

      <p className="text-gray-700 text-2xl font-semibold mt-4 mx-10">
        Wholesale Market
      </p>
      <p className="text-gray-500 mt-4 mx-12">
        Discover top-quality goods at unbeatable prices. Perfect for bulk buyers, retailers, or savvy shoppers looking for great value!
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

export default Wholesale;
