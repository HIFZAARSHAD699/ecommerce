import React from 'react';
import Footer from '../Footer';

const Careers = () => {
  return (
    <>
      <div className="text-center text-gray-600 px-4">
        <h2 className="font-bold text-4xl md:text-5xl mt-6">Careers</h2>
        <p className="mt-2 text-lg">Join Our Team</p>
      </div>

      <div className="mt-6 text-gray-600 max-w-3xl mx-auto px-4 space-y-6 text-base md:text-lg">
        <p>
          At <span className="font-bold">Pakistan Grocery Store,</span> we’re always looking for passionate and talented individuals to join our growing team. Whether you're experienced in customer service, marketing, logistics, or tech development — exciting opportunities await!
        </p>

        <div>
          <p className="text-xl font-bold mt-4">1. Why Work With Us?</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>A dynamic and innovative work environment</li>
            <li>Opportunities for career growth and learning</li>
            <li>Competitive salaries and benefits</li>
            <li>A team that values creativity and collaboration</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold mt-4">2. Current Openings</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              We're always on the lookout for great talent! Send your resume to{' '}
              <span className="font-bold">PakistanGrocery@gmail.com</span> to be considered for future roles.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
