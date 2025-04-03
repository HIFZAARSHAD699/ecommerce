import React from 'react';
import Footer from '../Footer';

const Partner = () => {
  return (
    <>
      <div className="text-center text-gray-600">
        <h2 className="font-bold text-5xl mt-4">Become a Partner</h2>
      </div>

      <div className="mt-6 text-gray-600 max-w-lg mx-auto">
        <p className="mt-4">
          Are you a supplier, vendor, or business looking to collaborate with  <span className="font-bold">Pakistan Grocery Store?</span> We’re excited to partner with brands that share our commitment to quality and customer satisfaction.
        </p>

        <p className="text-2xl mt-4 font-extrabold">Why Partner With Us?</p>

        <ul className="list-disc pl-5 mt-2">
          <li>Expand your business with our growing customer base</li>
          <li>Leverage our strong online presence and marketing strategies</li>
          <li>Enjoy seamless collaboration and professional support</li>
        </ul>

        <div className="mt-4">
          <p>
            If you're interested in partnering with us, email us at <span className="font-bold">PakistanGrocery@gmail.com</span> with your proposal.</p>
          <p className="mt-2">Let’s grow together! 🚀</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partner;
