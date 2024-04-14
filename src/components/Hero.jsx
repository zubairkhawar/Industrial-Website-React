import React from 'react';

const Hero = () => {
  return (
    <div className='relative w-full h-[90vh]'>
      {/* Image */}
      <img src='bg-hero.jpeg' alt='Background' className='w-full h-full object-cover' />

      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>

      {/* Content */}
      <div className='absolute top-1/2 right-1/4 transform -translate-y-1/2 text-left font-roboto text-cream z-10 pl-5 lg:pl-0'>
        <h1 className='text-4xl lg:text-7xl mb-4 ' style={{ WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: 'cream', textTransform: 'uppercase'}}>
          Sandpaper & Abrasive
        </h1>
        <h1 className='text-4xl lg:text-7xl mb-4 uppercase'>Industry</h1>
        <p className='text-sm lg:text-md mb-0 '>Dedicated to serving you for the past 25 years</p>
        <button className='mt-8 py-2 border bg-gradient-to-r from-[var(--primary-orange)] to-[var(--secondary-orange)] text-white text-lg '>Learn More {'>>'}</button>
      </div>
    </div>
  );
};

export default Hero;
