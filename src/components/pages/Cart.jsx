import React, { useContext } from "react";
import { cartContext } from "../../features/ContextProvider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "../../features/CartReducer";

const Cart = () => {
  const { cart } = useContext(cartContext);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {cart.length > 0 ? (
            <>
              {cart.map((product, index) => (
                <CartProduct key={`${product.id}-${index}`} product={product} />
              ))}
            </>
          ) : (
            <p className="text-center text-gray-600 text-lg">Your Cart is Empty.</p>
          )}
        </div>

        <div className="md:col-span-1 bg-gray-100 absolute ml-247 w-129 p-6 mt-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <p>Total Items: {totalItem(cart)}</p>
          <p>Total Price: PKR {totalPrice(cart)}</p>

          <button className="w-full bg-green-400 text-gray-600 py-2 mt-4 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
