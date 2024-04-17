import React, { useState } from 'react';
import Search from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
      };
  return (
    <nav class=" border-gray-200 px-4 lg:px-6 py-2.5 bg-[#161515]">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-16">
        <a href="https://haramainabrasives.com" class="flex items-center">
            <img src="logo.png" class="mr-3 h-6 sm:h-9" alt="Haramain Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Haramain Abrasives</span>
        </a>
        <div class="hidden lg:flex items-center lg:order-2">
            <Search fontSize='medium' className="text-white" />
            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
        </div>

        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="/" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0">Home</a>
                </li>
                <li>
                    <a href="/aboutus" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0">About Us</a>
                </li>
                <li>
                    <a href="/products" data-dropdown-toggle="dropdown" className=" py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 inline-block">Products</a>
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                        </li>
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                        </li>
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                        </li>
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                        </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="/blog" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0">Blog</a>
                </li>
                <li>
                    <a href="/contactus" class="block py-2 pr-4 pl-3 text-white p-[18px 40px 18px 40] pxborder-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 hover:bg-transparent">Contact Us</a>
                </li>
            </ul>
        </div>
        <div className='lg:hidden'>
        <MenuIcon fontSize='large' className='mr-4 cursor-pointer text-white' onClick={toggleMobileNav} />
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
</nav>
  )
}

export default Header
