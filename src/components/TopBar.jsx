import React from 'react';

const TopBar = () => {
  return (
    <div className='w-full h-16 bg-[#393838] flex justify-between px-4 py-2 items-center'>
      <h1 className='text-white text-xl mx-auto lg:text-left lg:mx-0'>Pakistan's No.1 Abrasive Manufacturing Industry</h1>
      <div className='hidden lg:flex items-center '>
        <img src="icon-phone.png" alt="Phone Icon" className='h-6 w-auto' />
        <a href="tel:+923366401000" className='text-white text-xl px-4'>+92-336-640-1000</a>
        <button className=''><a href='/aboutus'></a>Get A Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
