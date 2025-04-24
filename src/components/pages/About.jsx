import React from 'react';
import Footer from '../Footer';

const About = () => {
  return (
    <>
      <div className="text-center text-gray-600 px-4">
        <h2 className="font-bold text-4xl md:text-5xl mt-6">About Us</h2>
      </div>

      <div className="mt-6 text-gray-600 max-w-3xl mx-auto px-4 space-y-6 text-base md:text-lg">
        <p>
          Welcome to <span className="font-bold">Pakistan Grocery Store!</span></p>

        <p> At <span className="font-bold">Pakistan Grocery Store,</span> we believe that shopping should be simple, enjoyable, and hassle-free. Our mission is to provide high-quality products at affordable prices while ensuring an excellent customer experience.</p>

        <div>
          <p className="text-xl font-bold mt-4">1. Who We Are</p>
          <p> We are a passionate team dedicated to bringing you the best in home essentials, beauty products, and much more. With a focus on quality, affordability, and customer satisfaction, we carefully curate our products to meet your needs.</p>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">2. Why Choose Us?</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <span className="font-bold">High-Quality Products</span> – We handpick our items to ensure you get the best value.
            </li>
            <li>
              <span className="font-bold">Affordable Prices</span> – Enjoy premium quality without breaking the bank.
            </li>
            <li>
              <span className="font-bold">Secure Shopping</span> – Your safety is our priority, with secure payment options.
            </li>
            <li>
              <span className="font-bold">Excellent Customer Support</span> – Our friendly team is always here to help!
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">3. Our Mission</p>
          <p>
            We aim to create a seamless online shopping experience, offering a wide range of products that cater to your needs. Customer satisfaction is at the heart of everything we do, and we continuously strive to improve our services.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
