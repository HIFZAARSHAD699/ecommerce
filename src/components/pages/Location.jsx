import React from 'react';
import Footer from '../Footer';



const Location = () => {
  return (
    <>
      <div className='mt-6'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.809179862606!2d74.32681468715816!3d31.51860340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904580bd2c07b%3A0x79c0b29ff12cc402!2sMall%201!5e0!3m2!1sen!2s!4v1742707511496!5m2!1sen!2s"
          width="1520" height="450"  allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer/>
    </>
   
  );
};

export default Location;
