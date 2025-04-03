import React from 'react'
import Footer from '../Footer'


const Careers = () => {
  return (
    <>
   
    <div className='text-center text-gray-600'>
        <h2 className='font-bold text-5xl mt-4'>Careers</h2></div>
       
        <div className='mt-6 text-gray-600 max-w-lg mx-auto'>
        <p >Join Our Team</p>
        <p className='mt-4'>At  <span className='font-bold'>Palistan Grocery Store ,</span> we are always looking for passionate and talented individuals to join our growing team. Whether you're experienced in customer service, marketing, logistics, or tech development, we have exciting opportunities for you!</p>
            <p className='font-2xl mt-4 font-extrabold'>1. Why Work With Us?</p>
           
            <ul className='list-disc'>
               <li> A dynamic and innovative work environment</li>
               <li>Opportunities for career growth and learning</li>
               <li>Competitive salaries and benefits</li>
               <li>A team that values creativity and collaboration</li>
              </ul>
          <p className='font-2xl mt-4 font-extrabold'>2. Current Openings</p>
          
            <ul className='list-disc'>
               <li>Send us your resume at <span className='font-bold'>PakistanGrocery@gmail.com</span> to be considered for future roles.</li>
     </ul>
 
        </div>
        <Footer/>
        </>
  )
}

export default Careers