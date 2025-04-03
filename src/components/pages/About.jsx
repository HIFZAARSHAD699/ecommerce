import React from 'react'
import Footer from '../Footer'


const About = () => {
  return (
    <>
   
    <div className='text-center text-gray-600'>
        <h2 className='font-bold text-5xl mt-4'>About US</h2></div>
       
        <div className='mt-6 text-gray-600 max-w-lg mx-auto'>
        <p >Welcome to  <span className='font-bold'>Pakistan Grocery Store !</span> </p>
        <p className='mt-4'>At  <span className='font-bold'>Palistan Grocery Store ,</span>  we believe that shopping should be simple, enjoyable, and hassle-free. Our mission is to provide high-quality products at affordable prices while ensuring an excellent customer experience.</p>
            <p className='font-2xl mt-4 font-extrabold'> 1. Who We Are ?</p>
           <p>We are a passionate team dedicated to bringing you the best in home essentials , beayty products and much more. With a focus on quality, affordability, and customer satisfaction, we carefully curate our products to meet your needs.</p>

          <p className='font-2xl mt-4 font-extrabold'>2. Why Choose Us?</p>
          
            <ul className='list-disc'>
            <li><span className='font-bold'>High-Quality Products</span> – We handpick our products to ensure you get the best value.</li>
            <li><span className='font-bold'>Affordable Prices</span> – Enjoy premium quality without breaking the bank.</li>
            <li><span className='font-bold'>Secure Shopping</span> – Your safety is our priority, with secure payment options.</li>
            <li><span className='font-bold'> Excellent Customer Support</span> – Our friendly team is always here to help!</li>

          </ul>


          <p className='font-2xl mt-4 font-extrabold'>3. Our Mission</p>
           
          <p>We aim to create a seamless online shopping experience, offering a wide range of products that cater to your needs. Customer satisfaction is at the heart of everything we do, and we continuously strive to improve our services.</p>
 
        </div>
        <Footer/>
        </>
  )
}

export default About