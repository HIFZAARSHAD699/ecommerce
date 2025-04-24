import React from "react";

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50  flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        <img src={`http://localhost:5173/uploads/${product.image}`} alt={product.name} className="h-64 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-xl text-gray-700">PKR {product.price}</p>
        <button
          onClick={onClose}className="mt-6 bg-green-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default QuickViewModal;
