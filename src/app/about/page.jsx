import Image from 'next/image';
import React from 'react';
import staberryImg from '../../assets/image/staberry.jpg';

const AboutPage = () => {
  return (
    <div>
      <h2>This is about page</h2>

      {/* Online Image */}
      <Image 
        src='https://plus.unsplash.com/premium_photo-1683129807314-95150b5c3fb1?q=80&w=387&auto=format&fit=crop'
        alt='about image'
        width={600}
        height={200}
        className='rounded-lg shadow-lg mt-5'
      />

      {/* Public folder image */}
      <Image 
        src='/flower.jpg'
        alt='about image'
        width={600}
        height={400}
        className='rounded-lg shadow-lg mt-5'
      />

      {/* Imported image */}
      <Image 
        src={staberryImg}
        alt='about image'
        width={300}
        height={400}
        className='rounded-lg shadow-lg mt-5'
      />
    </div>
  );
};

export default AboutPage;