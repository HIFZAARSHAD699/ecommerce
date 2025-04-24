import React from 'react';
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
      <div className="text-center text-gray-600 px-4">
        <h2 className="font-bold text-4xl md:text-5xl mt-6">Contact Us</h2>
        <p className="mt-2 text-lg">We’d love to hear from you!</p>
      </div>

      <div className="mt-6 text-gray-600 max-w-3xl mx-auto px-4 space-y-6 text-base md:text-lg">
        <p>
          Whether you have a question about your order, need help with a product, or just want to say hello, feel free to reach out. We're here to assist you!
        </p>

        <ul className="list-none mt-4 space-y-2">
          <li>
            <span className="font-bold">📧 Email:</span> 
            <a href="mailto:PakistanGrocery@gmail.com" className="underline">PakistanGrocery@gmail.com</a>
          </li>
          <li>
            <span className="font-bold">📞 Phone:</span> 03XZ-YYYYYYY
          </li>
          <li>
            <span className="font-bold">📍 Address:</span> Shop #456 - XYZ Road, Lahore
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
