import React from 'react';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoLocation } from "react-icons/io5";
import { MdAccountCircle, MdSupportAgent, MdOutlinePayment } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { SiFacebook } from 'react-icons/si';

const Footer = () => {
  return (
    <>
      <div className='bg-slate-100 flex flex-col md:flex-row justify-evenly mt-10 py-6'>
        <div className='flex flex-col items-center text-center'>
          <IoLocation className="w-12 h-12 text-gray-900 cursor-pointer" />
          <p className='mt-2'>
            <span className='font-bold text-2xl'>Local Pickup <br /></span>
            Shop # 456 - xyz road, Lahore
          </p>
          <p className='text-gray-900 text-xl mt-16'>Support</p>
          <div className='text-gray-900 cursor-pointer '>
            <Link to="/faqs"><p className='mt-3'>FAQs</p></Link> 
            <Link to="/terms"><p>Terms & Conditions</p></Link> 
            <Link to="/return"><p>Return Policy</p></Link>
          </div>
        </div>

        <div className='flex flex-col items-center text-center'>
          <FaShippingFast className="w-12 h-12 text-gray-900 cursor-pointer" />
          <p className='mt-2'>
            <span className='font-bold text-2xl'>Fast Delivery <br /></span>
            Your items shipped out the same day
          </p>
          <p className='text-gray-900 text-xl mt-16'>Company</p>
          <div className='text-gray-900 cursor-pointer '>
            <Link to="/about"><p className='mt-3'>About US</p></Link> 
            <Link to="/careers"><p>Careers</p></Link> 
            <Link to="/contact"><p>Contact US</p></Link>
          </div>
        </div>

        <div className='flex flex-col items-center text-center'>
          <MdSupportAgent className="w-12 h-12 text-gray-900 cursor-pointer" />
          <p className='mt-2'>
            <span className='font-bold text-2xl'>Customer Support <br /></span>
            <span className='underline'>PakistanGrocery@gmail.com</span>
          </p>
          <p className='text-gray-900 text-xl mt-16'>Resources</p>
          <Link to="/partner">
            <p className='text-gray-900 cursor-pointer mt-3'>Become a Partner</p>
          </Link>
        </div>

        <div className='flex flex-col items-center text-center'>
          <MdOutlinePayment className="w-12 h-12 text-gray-900 cursor-pointer" />
          <p className='mt-2'>
            <span className='font-bold text-2xl'>Payment Options <br /></span>
            Via Credit or Debit Card
          </p>
          <p className='text-gray-900 text-xl mt-16'>Keep in Touch</p>
          <p className='text-gray-900 cursor-pointer mt-3'>
            Subscribe to receive updates, <br /> access to exclusive deals, and more
          </p>
          <input type="mail" id="mail" placeholder='Your email' className='border border-black h-10 w-75 mt-5 ml-6' />        </div>
      </div>

      <div className='bg-slate-100 flex flex-col md:flex-row justify-between items-center py-4 px-6'>
        <p>© Pakistan Grocery Store <sup>TM</sup></p>
        <div className='flex flex-col'>
          <p>Follow Us</p>
          <div className='flex mt-4 gap-6'>
            <SiFacebook className='h-12 w-12 cursor-pointer' />
            <BiLogoInstagramAlt className='h-13 w-13 cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
