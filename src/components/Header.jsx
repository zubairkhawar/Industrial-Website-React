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
        <div class="hidden lg:flex items-center lg:order-2 gap-2">
            <Search fontSize='medium' className="text-white" />
            <input type="text" id="search-navbar" class="block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-[#FE5E15] focus:border-[#FE5E15]" placeholder="Search..."></input>
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

        <ul className="flex flex-col gap-2 max-w-[280px] mt-24">
                        <li className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <a href="/" className="text-3xl pl-6 ">Home</a>     
                        </li>
                        <li className='p-2 font-medium'>
                            <a href="/aboutus" className="text-3xl pl-6 ">About Us</a>        
                        </li>
                        <li>
                            <details className="group">
                                <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                                    <span className="flex gap-2">
                                        <a href="/products" className="flex gap-2 text-3xl pl-6 ">Products</a>
                                    </span>
                                    <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                </summary>
                                <article className="px-4 pb-4">
                                    <ul className="flex flex-col gap-1 pl-6 text-lg">
                                        <li className='hover:text-[#FE5E15]'><a href="/coatedabrasives">Coated Abrasives</a></li>
                                        <li className='hover:text-[#FE5E15]'><a href="/diamondcuttingblades">Diamond Cutting Blades</a></li>
                                        <li className='hover:text-[#FE5E15]'><a href="/steelgrindingdisc">Steel & Grinding Disc</a></li>
                                        <li className='hover:text-[#FE5E15]'><a href="/flapdisc">Flap Disc</a></li>
                                    </ul>
                                </article>
                            </details>
                        </li>
                        <li className='p-2 font-medium'>
                            <a href="/products" className="text-3xl pl-6 ">Blog</a>        
                        </li>
                        <li className='p-2 font-medium'>
                            <a href="/contactus" className="text-3xl pl-6">Contact Us</a>        
                        </li>
                    </ul>
        </div>
    )}
</nav>
  )
}

export default Header
