import React from 'react'
import Footer from '../Footer'


const Faqs = () => {
  return (
    <>
   
    <div className='text-center text-gray-600'>
        <h2 className='font-bold text-7xl mt-4'>FAQS</h2>
        <p>Below FAQ are some common concerns of our clients before purchasing.</p></div>
        <div className='mt-6 text-gray-600 max-w-lg mx-auto'>
            <p className='font-2xl mt-4 font-extrabold'>1. How do I change my personal details or email address?</p>
           <p>You can easily change all your information on your account.  Go to login page and log in, then click “my account” and “edit”. Here you can change all your contact information</p>

            <p className='font-2xl mt-2 font-extrabold'>2. What is your return and refund policy?</p>
            <p>We accept returns within [seven] days of delivery, provided the item is unused and in its original packaging. Once we receive the returned item, a refund will be processed within [three] days</p>
            <p className='font-2xl mt-2 font-extrabold'>3. What payment methods can I use?</p>
            <p>Currently we support COD (Cash on Delivery) and Credit Card on delivery payment methods.</p>
            <p className='font-2xl mt-2 font-extrabold'>4. How can I contact customer support?</p>
            <p>You can reach our customer support team via email or phone. Visit our Contact Us page for more details. Our support team is available [five] days a week from [12 am to 12pm] to assist you.</p>
            <p className='font-2xl mt-2 font-extrabold'>5. What are the delivery charges?</p>
            <p>For All orders Flat PKR 199 delivery/shipment will be charged only if product weight is within 5 KG. Above 5KG to 10KG charges are PKR500, 10KG to 20KG charges are PKR1000,
            Above 20 KG RS.100 will be added per KG.</p>
        </div>
        <Footer/>
        </>

    
  )
}

export default Faqs