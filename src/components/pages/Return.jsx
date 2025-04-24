import React from 'react';
import Footer from '../Footer';

const Return = () => {
  return (
    <>
      <div className="text-center text-gray-600 px-4">
        <h2 className="font-bold text-4xl md:text-5xl mt-6">Return & Refund Policy</h2>
      </div>

      <div className="mt-6 text-gray-600 max-w-3xl mx-auto px-4 space-y-6 text-base md:text-lg">
        <p>
          <span className="font-bold">Last Updated:</span> 10-April-2025
        </p>

        <p>
          At <span className="font-bold">Palistan Grocery Store,</span> we strive to provide high-quality products and excellent customer service. If you are not fully satisfied with your purchase, we’re here to help!
        </p>

        <div>
          <p className="text-xl font-bold mt-4">1. Eligibility for Returns</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>You can return items within seven days from the date of delivery.</li>
            <li>The item must be <span className="font-bold">unused, in its original packaging,</span> and in the same condition as received.</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">2. Return Process</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Contact our customer support at <span className="font-bold">PakistanGrocery@gmail.com</span> with your order details.</li>
            <li>Once your request is approved, we will provide a return shipping label and instructions.</li>
            <li>Pack the item securely and send it back using the provided label.</li>
            <li>After receiving and inspecting the item, we will process your refund or exchange within three business days.</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">3. Refund Policy</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Shipping fees are non-refundable unless the return is due to our error (e.g., wrong or defective item).</li>
            <li>If your refund is delayed, please check with your bank or payment provider before contacting us.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Return;
