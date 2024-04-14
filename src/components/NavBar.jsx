import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className='relative'>
      {/* Opacity Overlay */}
      <div className='absolute top-0 left-0 w-full h-16 bg-black opacity-60'></div>

      {/* NavBar Content */}
      <div className='z-10 w-full h-16 flex justify-between items-center text-white absolute top-0'>
        <div className='flex ml-4'>
          <h1 className='text-bold text-xl'>Haramain Abrasives</h1>
        </div>
        <ul className='hidden lg:flex px-4 space-x-6'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/aboutus'>About Us</a>
          </li>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/blogs'>Blogs</a>
          </li>
          <li>
            <a href='/contactus'>Contact Us</a>
          </li>
        </ul>
        <div className='lg:hidden'>
          <MenuIcon fontSize='large' className='mr-4 cursor-pointer' onClick={toggleMobileNav} />
        </div>
      </div>

      {/* Mobile Nav*/}
      {isMobileNavOpen && (
        <div className={`z-20 w-[90%] max-w-[400px] overflow-hidden lg:hidden ease-in duration-500 absolute text-black right-0 top-0 h-screen bg-white transform flex flex-col ${
          isMobileNavOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}>
          <div>
            <CloseIcon fontSize='large' className='absolute right-5 top-5 cursor-pointer' onClick={toggleMobileNav} />
          </div>

          <ul className='h-full w-full pt-12 pl-6'>
            <li className='text-3xl py-3'>
              <a href='/'>Home</a>
            </li>
            <li className='text-3xl py-3'>
              <a href='/aboutus'>About Us</a>
            </li>
            <li className='text-3xl py-3 flex justify-between'>
              <a href='/products'>Products</a>
              <div>
                <KeyboardArrowDownIcon fontSize='large' className='pb-1 mr-5' />
              </div>
            </li>
            <li className='text-3xl py-3'>
              <a href='/blogs'>Blogs</a>
            </li>
            <li className='text-3xl py-3'>
              <a href='/contactus'>Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
