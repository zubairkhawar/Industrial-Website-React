import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        if (!isMobileNavOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    

    return (
        <div className="relative">
            {/* Opacity Overlay */}
            <div className="absolute top-0 left-0 w-full h-16 bg-black opacity-60"></div>

            {/* NavBar Content */}
            <div className="z-10 w-full h-16 flex justify-between items-center text-white absolute top-0">
                <div className="flex items-center ml-2 lg:ml-4 lg:mt-4">
                    <img src="logo.png" className="mr-3 h-9 lg:ml-12" alt="Haramain Logo" />
                    <span className="text-2xl font-semibold whitespace-nowrap">Haramain Abrasives</span>
                </div>
                <ul className="hidden lg:flex-grow lg:flex justify-center space-x-8 lg:mt-4">
                    <li>
                        <a href="/" className="px-2 py-2 hover:text-[#FF781D] hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="/aboutus" className="px-2 py-2 hover:text-[#FF781D] hover:underline">About Us</a>
                    </li>
                    <li className='group'>
                        <a href="/products" className="px-2 py-2 hover:text-[#FF781D] hover:underline">Products</a>
                        <div className='inline-block hover:text-[#FF781D] hover:underline'>
                            <KeyboardArrowDown/>
                            <div className="absolute left-[50%] transform -translate-x-1/5 w-50 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                <div className="py-1">
                                    <a href="/coatedabrasives" className="block px-4 py-2 text-md text-black hover:bg-[#FE5E15]">Coated Abrasives</a>
                                    <a href="/diamondcuttingblades" className="block px-4 py-2 text-md text-black hover:bg-[#FE5E15]">Diamond Cutting Blades</a>
                                    <a href="steelgrindingdisc" className="block px-4 py-2 text-md text-black hover:bg-[#FE5E15]">Steel & Grinding Disc</a>
                                    <a href="/flapdisc" className="block px-4 py-2 text-md text-black hover:bg-[#FE5E15]">Flap Disc</a>
                                </div>
                            </div>
                        </div>  
                    </li>
                    <li>
                        <a href="/blogs" className="px-2 py-2 hover:text-[#FF781D] hover:underline">Blogs</a>
                    </li>
                    <li>
                        <a href="/contactus" className="px-2 py-2 hover:text-[#FF781D] hover:underline">Contact Us</a>
                    </li>
                </ul>
                <div className="hidden lg:flex items-center ml-4 mr-12 pt-4">
                    <SearchIcon className="text-white cursor-pointer" onClick={toggleSearch} />
                    {isSearchOpen && (
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-[200px] p-2 pl-3 pr-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-[#FE5E15] focus:border-[#FE5E15] absolute top-14 right-10"
                            placeholder="Search..."
                        />
                    )}
                </div>
                <div className="lg:hidden">
                    <MenuIcon fontSize="large" className="mr-4 cursor-pointer" onClick={toggleMobileNav} />
                </div>
            </div>

            {/* Mobile Nav*/}
            {isMobileNavOpen && (
                <div className={`z-20 w-[90%] max-w-[400px] overflow-hidden lg:hidden ease-in duration-500 absolute text-black right-0 top-0 h-screen bg-white transform ${isMobileNavOpen ? 'translate-x-0 ' : 'translate-x-full'}`}>
                    <div>
                        <CloseIcon fontSize='large' className='absolute right-5 top-5 cursor-pointer' onClick={toggleMobileNav} />
                    </div>
                    <ul className="flex flex-col gap-2 max-w-[280px] mx-auto mt-24">
                        <li className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <a href="/" className="text-3xl pl-4 md:pl-0">Home</a>     
                        </li>
                        <li className='p-2 font-medium'>
                            <a href="/aboutus" className="text-3xl pl-4 md:pl-0">About Us</a>        
                        </li>
                        <li>
                            <details className="group">
                                <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                                    <span className="flex gap-2">
                                        <a href="/products" className="flex gap-2 text-3xl pl-4 md:pl-0">Products</a>
                                    </span>
                                    <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                </summary>
                                <article className="px-4 pb-4">
                                    <ul className="flex flex-col gap-1 pl-2 text-lg">
                                        <li className='hover:text-[#FE5E15]'><a href="/coatedabrasives">Coated Abrasives</a></li>
                                        <li className='hover:text-[#FE5E15]'><a href="/diamondcuttingblades">Diamond Cutting Blades</a></li>
                                        <li className='hover:text-[#FE5E15]'><a href="/steelgrindingdisc">Steel & Grinding Disc</a></li>
                                        <li className='hover:text-[#FE5E15]'><a href="/flapdisc">Flap Disc</a></li>
                                    </ul>
                                </article>
                            </details>
                        </li>
                        <li className='p-2 font-medium'>
                            <a href="/blogs" className="text-3xl pl-4 md:pl-0">Blogs</a>        
                        </li>
                        <li className='p-2 font-medium'>
                            <a href="/contact" className="text-3xl pl-4 md:pl-0">Contact Us</a>        
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
