import React from 'react';
import Footer from '../Footer';

const Terms = () => {
  return (
    <>
      <div className="text-center text-gray-600 px-4">
        <h2 className="font-bold text-4xl md:text-6xl mt-6">Terms & Conditions</h2>
      </div>

      <div className="mt-6 text-gray-600 max-w-3xl mx-auto px-4 space-y-6 text-base md:text-lg">
        <p>
          <span className="font-bold">Last Updated:</span> 10-April-2025
        </p>

        <p>
          Welcome to <span className="font-bold">Palistan Grocery Store!</span> By using our website and making a purchase, you agree to the following Terms & Conditions. Please read them carefully before proceeding.
        </p>

        <div>
          <p className="text-xl font-bold mt-4">1. General Terms</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>By accessing this website, you agree to comply with these Terms & Conditions and our Privacy Policy.</li>
            <li>We reserve the right to update or modify these terms at any time without prior notice.</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">2. Orders & Payments</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>All orders are subject to availability and confirmation of payment.</li>
            <li>Prices are listed in PKR and may change without notice.</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">3. Shipping & Delivery</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Shipping times may vary based on location and carrier.</li>
            <li>We are not responsible for delays caused by customs, weather conditions, or courier services.</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">4. Limitation of Liability</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
