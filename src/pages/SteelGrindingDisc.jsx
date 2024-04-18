import React from 'react'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SteelGrindingDisc = () => {
    const SteelGrindingDiscProducts = [
        {
        picture: '/src/assets/products/steelgrindingdisc/DSC 04240-min.jpg',
          name: 'Steel Cut-off Wheel',
          type: 'Premium Quality',
          brand: 'Golden Peak',
        },
        {

            picture: '/src/assets/products/steelgrindingdisc/steelcut-offwheelsupx-.jpg',
            name: 'Steel Cut-off Wheel (Superior)',
            type: 'Premium Quality',
            brand: 'Golden Peak',
        },
        {
            picture: '/src/assets/products/steelgrindingdisc/steel-cutting-discx-min.jpg',
          name: 'Steel Cutting Disc',
          type: 'Premium Quality',
          brand: 'Golden Peak',
          },
        {
            picture: '/src/assets/products/steelgrindingdisc/DSC 04247-min.jpg',
          name: 'Stone Cutting Disc',
          type: 'Premium Quality',
          brand: 'Golden Peak',
        },
        
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
                      <div className='absolute top-1/2 lg:right-1/4 transform -translate-y-1/2 text-left font-roboto text-cream z-10 pl-5 lg:pl-0'>
                          <h1 className='text-4xl lg:text-8xl mb-4 font-sans font-bold' >
                          Steel & Grinding Disc
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
                                              <a href="/steelgrindingdisc"
                                                  class="rounded-md p-1 text-md font-medium text-white focus:text-[#FF781D]focus:shadow hover:text-[#FF781D]">
                                                  Steel & Grinding Disc </a>
                                          </div>
                                      </div>
                                  </li>
                              </ol>
                            </div>
                        </div>

      </div>

      <section className='h-auto w-full p-12'>
                    <div className='text-center'>
                        <h1 className='text-4xl lg:text-7xl'><strong>Steel & Grinding </strong>Disc</h1>
                        <p className='text-justify text lg:mx-28 pt-12'>We are actively engaged in offering Grinding Wheels. Used to cut steel and masonry block, offered grinding wheel is commended in the market for its excellent cutting. This grinding wheel is developed by Haramain skillful workforce utilizing the high grade material and advanced techniques. Stainless Grinding Wheels for use on metal items from hard alloys down to softer mild steels and can be used for applications which require fast stock removal. CoreTemp Abrasives Ultra Stainless Grinding delivers 50% faster grinding so it is ideal for those larger jobs.</p>
                    </div>
        </section>
        <ProductShow products={SteelGrindingDiscProducts} />
        
      <Footer/>
    </div>
  )
}

export default SteelGrindingDisc
