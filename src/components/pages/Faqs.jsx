import React from 'react';
import Footer from '../Footer';

const Faqs = () => {
  return (
    <>
      <div className="text-center text-gray-600 px-4">
        <h2 className="font-bold text-5xl md:text-7xl mt-6">FAQS</h2>
        <p className="text-base md:text-lg mt-2">
          Below FAQ are some common concerns of our clients before purchasing.
        </p>
      </div>

      <div className="mt-8 text-gray-600 max-w-3xl mx-auto px-4 space-y-6">
        <div>
          <p className="text-xl font-bold">1. How do I change my personal details or email address?</p>
          <p>
            You can easily change all your information on your account. Go to login page and log in, then click “My Account” and “Edit”. Here you can change all your contact information.
          </p>
        </div>

        <div>
          <p className="text-xl font-bold">2. What is your return and refund policy?</p>
          <p>
            We accept returns within 7 days of delivery, provided the item is unused and in its original packaging. Once we receive the returned item, a refund will be processed within 3 days.
          </p>
        </div>

        <div>
          <p className="text-xl font-bold">3. What payment methods can I use?</p>
          <p>
            Currently we support COD (Cash on Delivery) and Credit Card on delivery payment methods.
          </p>
        </div>

        <div>
          <p className="text-xl font-bold">4. How can I contact customer support?</p>
          <p>
            You can reach our customer support team via email or phone. Visit our Contact Us page for more details. Our support team is available 5 days a week from 12 AM to 12 PM to assist you.
          </p>
        </div>

        <div>
          <p className="text-xl font-bold">5. What are the delivery charges?</p>
          <p>
            For all orders, a flat PKR 199 delivery/shipment will be charged if product weight is within 5 KG.
            <br />
            5KG to 10KG: PKR 500
            <br />
            10KG to 20KG: PKR 1000
            <br />
            Above 20 KG: PKR 100 will be added per KG
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faqs;
