import React from 'react';
import simg from "../assets/store.jpg";
import Pic from '../components/Pic';
import { Link } from 'react-router-dom';
import Footer from './Footer';





const Home = () => {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <img src={simg} className="w-full h-full object-cover" alt="Not available" />
      
        
         <Link to="/flourrice"><button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-300 p-4 px-10 text-lg rounded-xl 
              sm:p-2  hover:bg-white cursor-pointer transition-all duration-300 ease-in-out">
            Shop Now ➡
          </button></Link> 
         
       <Pic/>
       <Footer/>
       
        
      </div>
    </>
  );
}

export default Home;
