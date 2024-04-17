import React from 'react'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import Header from '../components/Header';

const Products = () => {
  return (
    <div>

      <Header />

      {/* Hero Section */}

      <div className='relative w-full h-[600px] bg-cover '>
                      <img src='bg-hero.jpeg' alt='Background' className='w-full h-full object-cover' />

                      {/* Overlay */}
                      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>

                      {/* Content */}
                      <div className='absolute top-1/2 lg:right-2/4 transform -translate-y-1/2 text-left font-roboto text-cream z-10 pl-5 lg:pl-0'>
                          <h1 className='text-4xl lg:text-8xl mb-4 font-sans font-bold' >
                          Products
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
                                                  Products </a>
                                          </div>
                                      </div>
                                  </li>
                              </ol>
                            </div>
                        </div>

      </div>


            
    </div>
  )
}

export default Products
