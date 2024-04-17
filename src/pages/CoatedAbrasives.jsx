import React from 'react'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CoatedAbrasives = () => {
    const coatedAbrasivesProducts = [
        {
          picture: '/src/assets/products/coatedabrasives/gproll1.jpg',
          name: 'Roll (Aluminium Oxide)',
        },
        {
          picture: '/src/assets/products/coatedabrasives/horseroll1.jpg',
          name: 'Roll (Aluminium Oxide)',
        },
        {
            picture: '/src/assets/products/coatedabrasives/atlasroll1.jpg',
            name: 'Roll (Aluminium Oxide)',
          },
        {
            picture: '/src/assets/products/coatedabrasives/atlasroll1.jpg',
            name: 'Belt (Aluminium Oxide)',
        },
        {
            picture: '/src/assets/products/coatedabrasives/gproll1.jpg',
            name: 'Silicon Carbide Latex Paper',
        },
        {
            picture: '/src/assets/products/coatedabrasives/gproll1.jpg',
            name: 'Silicon Carbide Fiber Disc',
        },
        {
            picture: '/src/assets/products/coatedabrasives/gproll1.jpg',
            name: 'Silicon Carbide Fiber Disc',
        },
        {
            picture: '/src/assets/products/coatedabrasives/gproll1.jpg',
            name: 'Silicon Carbide Fiber Disc',
        },
        {
            picture: '/src/assets/products/coatedabrasives/gproll1.jpg',
            name: 'Silicon Carbide Fiber Disc',
        },
        {
            picture: '/src/assets/products/coatedabrasives/gproll1.jpg',
            name: 'Silicon Carbide Fiber Disc',
        }
        // Add more products as needed
      ];
  return (
    <div>
        <Header/>
        <div className='relative w-full h-[600px] bg-cover '>
                      <img src='Products.jpg' alt='Background' className='w-full h-full object-cover' />

                      {/* Overlay */}
                      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>

                      {/* Content */}
                      <div className='absolute top-1/2 lg:right-2/4 transform -translate-y-1/2 text-left font-roboto text-cream z-10 pl-5 lg:pl-0'>
                          <h1 className='text-4xl lg:text-8xl mb-4 font-sans font-bold' >
                          Coated Abrasives
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
                                              <a href="/products"
                                                  class="rounded-md p-1 text-md font-medium text-white focus:text-[#FF781D]focus:shadow hover:text-[#FF781D]">
                                                  Products </a>
                                          </div>
                                      </div>
                                  </li>
                                  <li class="text-left">
                                      <div class="flex items-center">
                                          <span class="mx-2 text-white"><ArrowForwardIosOutlined fontSize=''/></span>
                                          <div class="-m-1">
                                              <a href="/coatedabrasives"
                                                  class="rounded-md p-1 text-md font-medium text-white focus:text-[#FF781D]focus:shadow hover:text-[#FF781D]">
                                                  Coated Abrasives </a>
                                          </div>
                                      </div>
                                  </li>
                              </ol>
                            </div>
                        </div>

      </div>

      <section className='h-auto w-full p-12'>
                    <div className='text-center'>
                        <h1 className='text-7xl'><strong>Coated</strong>Abrasives</h1>
                        <p className='text-justify text mx-28 pt-12'>Haramain abrasives manufactures and markets a wide range of coated abrasives products coated abrasives are made of various abrasive grains bonded to a backing material of paper, cloth or vulcanised fibre. These abrasive products are used for all sanding processes from rough to final finishing - in the construction, metal, wood, and stone industries.We believe in delivering right choices that matter. Our abrasives are classified in BEST, BETTER, and GOOD performance price tiers to help you choose the right product for your specific application every time.</p>
                    </div>
        </section>
        <ProductShow products={coatedAbrasivesProducts} />
      <Footer/>
    </div>
  )
}

export default CoatedAbrasives
