import React, { useState } from 'react';
import Search from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import DoneIcon from '@mui/icons-material/Done';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import MeetTeam from '../components/MeetTeam';
import Workers from '../components/Workers';
import ExperienceStat from '../components/ExperienceStat';


const Aboutus = () => {
    
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
      };

  return (
    <div>
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
                                <a href="#" data-dropdown-toggle="dropdown" className=" py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 inline-block">Products</a>
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
                                <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0">Blog</a>
                            </li>
                            <li>
                                <a href="/contact" class="block py-2 pr-4 pl-3 text-white p-[18px 40px 18px 40] pxborder-b border-gray-100 hover:text-[#FE5E15] hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 hover:bg-transparent">Contact Us</a>
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

        <section>
        <div className='relative w-full h-[600px] bg-cover '>
                <img src='bg-hero.jpeg' alt='Background' className='w-full h-full object-cover' />

                {/* Overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>

                {/* Content */}
                <div className='absolute top-1/2 lg:right-2/4 transform -translate-y-1/2 text-left font-roboto text-cream z-10 pl-5 lg:pl-0'>
                    <h1 className='text-5xl lg:text-8xl mb-4 font-sans font-bold' >
                    About Us 
                    </h1>

                    {/* Breadcrumb */}
                    <div className='flex pt-8'>
                        <ol role="list" class="flex items-center">
                            <li class="text-left">
                                <div class="-m-1">
                                    <a href="/"
                                        class="rounded-md p-1 text-md font-medium text-white focus:text-gray-900 focus:shadow hover:text-[#FF781D]">
                                        Home </a>
                                </div>
                            </li>

                            <li class="text-left">
                                <div class="flex items-center">
                                    <span class="mx-2 text-white"><ArrowForwardIosOutlined fontSize=''/></span>
                                    <div class="-m-1">
                                        <a href="contactus"
                                            class="rounded-md p-1 text-md font-medium text-white focus:text-[#FF781D]focus:shadow hover:text-[#FF781D]">
                                            About Us</a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </section>


        {/* About Company Section */}
        
        <section className="flex flex-col lg:flex-row justify-center my-16">
            <div className='flex ml-1 items-center'>
                <div className='relative inline-flex ml-1 lg:ml-16'>
                    <img src="bg-img3.jpg" alt='sandpaper' className='w-full h-auto lg:w-[500px] lg:h-[650px]'/>
                    <div className='hidden lg:block border absolute bg-[#FE5E15] z-10 lg:right-[-90px]  lg:top-[70%] lg:bottom-[-50px] p-[30px] w-full h-auto lg:max-w-[180px] lg:max-h-[260px]'>
                        <div className='bg-white rounded-full flex justify-center items-center w-7 h-7'>
                            <DoneIcon style={{ color: '#FE5E15'}} />
                        </div>
                        <div className='text-white font-bold mt-[20px] leading-[50px] tracking-[-0.7px] text-md lg:text-2xl'>Awards Winning Industry & Factory</div>
                    </div>
                </div>
            </div>

            <div className='container flex flex-col lg:m-4 mt-28 lg:ml-24 lg:mt-0  ml-auto w-full lg:w-[700px] p-4 lg:pr-32'>
                <p className='text-[#FE5E15] pb-[20px] font-semibold text-xs lg:text-sm inline-block '>//About company</p>
                <h3 className='text-2xl lg:text-4xl text-[#17262f] font-bold leading-10'>Best Sandpaper Manufacturing <br/>Company based On <br/> Pakistan Since 2015 </h3>
                <p className='text-[#4A5257] font-normal text-justify mt-2 lg:mt-4'>Haramain Abrasives is a leading abrasives solution provider in Pakistan.Since our founding, customer satisfaction has been our priority and our growth is attributed to strict quality control, continuous research and development to meet customer requirements. We are proud to announce that this uninterrupted effort and providing the highest quality abrasive materials and services to our customers for over 30 years has given us a brand name with selling all over the globe. Our experienced team of abrasive experts is committed to helping you find the best abrasive solution for any application. Whether you are looking for abrasive media, tools, or machines, we have the right product for your job.</p>
                <div className='flex flex-col lg:flex-row items-start lg:items-center mt-2 lg:mt-6'>
                    <div className='mr-8 '>
                        <div className='flex mb-3 lg:mb-6'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Coated Abrasives</h4>
                        </div>
                        <div className='flex mt-2 mb-3 lg:mb-0'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Diamond Cutting Blades</h4>
                        </div>
                    </div>
                    <div>
                        <div className='flex mb-3 lg:mb-6'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Steel & Grinding Disc</h4>
                        </div>
                        <div className='flex mt-2 lg:mt-2'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Flap Disc</h4>
                        </div>
                    </div>
                </div>
                <a href='' className='bg-[#161515] font-serif text-center text-xs lg:text-sm text-white mt-6 py-2 px-4 w-[120px] lg:w-[150px] hover:bg-gray-800 focus:outline-none'>Learn more {'>>'}</a>
            </div>
        </section>

        {/* experience stat */}
        <ExperienceStat />



         {/* why choose us Section */}
        
         <section className="flex flex-col lg:flex-row  my-12">
            <div className='flex ml-1 items-center order-2'>
                <div className='relative inline-flex lg:mr-[50px]'>
                    <img src="bg-img.jpg" alt='sandpaper' className='w-full h-auto '/>
                </div>
            </div>
            <div className='container flex flex-col order-1 m-4 mt-28 lg:mt-0 ml-auto w-full lg:w-[700px] p-4 lg:pr-32'>
                <p className='text-[#FE5E15] pb-[20px] font-semibold text-xs lg:text-sm inline-block '>//Why Choose Us</p>
                <h3 className='text-2xl lg:text-4xl text-[#17262f] font-bold leading-10'>Unlocking excellence with Every Grit: Your path to flawless finishes </h3>
                <p className='text-[#4A5257] font-normal text:center lg:text-justify mt-2 lg:mt-4'>For over 30 years, Haramain Abrasives has been perfecting the art of making coated abrasives. We're all about delivering top-notch quality and performance in every product. Our experience speaks volumes, guaranteeing you the best results every time.</p>
                <div className='flex flex-col lg:flex-row items-start lg:items-center mt-2 lg:mt-6'>
                    <div className='mr-8 '>
                        <div className='flex mb-3 lg:mb-6'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Rolls{"(Aluminium Oxide)"}</h4>
                        </div>
                        <div className='flex mt-2 mb-3 lg:mb-0'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Silicon Carbide Water Proof</h4>
                        </div>
                    </div>
                    <div>
                        <div className='flex mb-3 lg:mb-6'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Silicon Carbide Latex Paper</h4>
                        </div>
                        <div className='flex mt-2 lg:mt-2'>
                            <VerifiedUserOutlinedIcon style={{ color: '#FE5E15' }} />
                            <h4 className='pl-2'>Velcro Disc</h4>
                        </div>
                    </div>
                </div>
                <a href='' className='bg-[#161515] font-serif text-center text-xs lg:text-sm text-white mt-6 py-2 px-4 w-[120px] lg:w-[150px] hover:bg-gray-800 focus:outline-none'>Learn more {'>>'}</a>
            </div>
        </section>

        <MeetTeam />

        <Workers />


    




    </div>
  )
}

export default Aboutus
