import React, { useContext } from "react";
import { cartContext } from "../../features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(cartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (Index !== -1 && cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (Index !== -1 && cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="flex items-center mt-4 gap-4 border p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex flex-col flex-grow">
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <h4 className="text-gray-600">PKR {product.price}</h4>

        <div className="flex items-center gap-2 mt-2">
          <button
            className="bg-gray-300 text-black rounded-full px-3 py-1"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="px-4 bg-gray-300 text-black rounded py-2">
            {product.quantity}
          </button>
          <button
            className="bg-gray-300 text-black rounded-full px-3 py-1"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>

        <button
          className="bg-red-300 text-gray-600 px-4 py-2 mt-3 rounded-md"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
