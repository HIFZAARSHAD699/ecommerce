import React from 'react'
import Footer from '../Footer'


const Contact = () => {
  return (
    <>
   
    <div className='text-center text-gray-600'>
        <h2 className='font-bold text-5xl mt-4'>Contact Us</h2></div>
       
        <div className='mt-6 text-gray-600 max-w-lg mx-auto'>
            <p className='font-2xl mt-4 '>We’d love to hear from you! Whether you have a question about your order, need help with a product, or just want to say hello, feel free to reach out.</p>
           
          
            <ul className='mt-4'>
               <li><span className='font-bold'>📧 Email:</span>  PakistanGrocery@gmail.com with your order details</li>
          <li> <span className='font-bold'>📞 Phone:</span>  03XZ-YYYYYYY </li>
          <li> <span className='font-bold'>📍 Address: </span>  Shop # 456 - xyz road, Lahore </li>
          </ul>

        </div>
        <Footer/>
        </>
  )
}

export default Contact