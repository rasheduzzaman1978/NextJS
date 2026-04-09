import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <Image src='/images/about.jpg' alt='about image' width={600} height={400} className='rounded-lg shadow-lg mt-5' />
        </div>
    );
};

export default AboutPage;