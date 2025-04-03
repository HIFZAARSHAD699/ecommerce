import React from 'react'
import Footer from '../Footer'


const Terms = () => {
  return (
    <>
   
    <div className='text-center text-gray-600'>
        <h2 className='font-bold text-6xl mt-4'>Terms & Conditions</h2></div>
       
        <div className='mt-6 text-gray-600 max-w-lg mx-auto'>
        <p ><span className='font-bold'>Last Updated:</span> [10-April-2025]</p>
        <p className='mt-4'>Welcome to <span className='font-bold'>Palistan Grocery Store !</span> By using our website and making a purchase, you agree to the following Terms & Conditions. Please read them carefully before proceeding.</p>
            <p className='font-2xl mt-4 font-extrabold'>1. General Terms</p>
           <p>
            <ul className='list-disc'>
               <li> By accessing this website, you agree to comply with these Terms & Conditions and our Privacy Policy.</li>
          <li>We reserve the right to update or modify these terms at any time without prior notice.</li> </ul></p>

          <p className='font-2xl mt-4 font-extrabold'>2. Orders & Payments</p>
           <p>
            <ul className='list-disc'>
               <li> All orders are subject to availability and confirmation of payment.</li>
          <li>Prices are listed in Pkr and may change without notice.</li> </ul></p>


          <p className='font-2xl mt-4 font-extrabold'>3. Shipping & Delivery</p>
           <p>
            <ul className='list-disc'>
               <li>Shipping times may vary based on location and carrier.</li>
          <li>We are not responsible for delays caused by customs, weather conditions, or courier services.</li> </ul></p>


          <p className='font-2xl mt-4 font-extrabold'>4. Limitation of Liability</p>
           <p>
            <ul className='list-disc'>
               <li> We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</li>
          </ul></p>


           
        </div>
        <Footer/>
        </>
  )
}

export default Terms