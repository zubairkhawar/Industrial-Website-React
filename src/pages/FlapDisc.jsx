import React from 'react'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'

const FlapDisc = () => {
    const FlapDiscProducts = [
        {
        picture: '/src/assets/products/flapdisc/EcoPlus-FlapDisc1-min.jpg',
          name: 'Flap Disc',
          type: 'A Series Eco Plus',
          brand: 'Golden Peak',
        },
        {

            picture: '/src/assets/products/flapdisc/za-seriesx-min.jpg',
            name: 'Flap Disc',
            type: 'ZA Series Premium',
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
                      <div className='absolute top-1/2 lg:right-2/4 transform -translate-y-1/2 text-left font-roboto text-cream z-10 pl-5 lg:pl-0'>
                          <h1 className='text-4xl lg:text-8xl mb-4 font-sans font-bold' >
                          Flap Disc
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
                                              <a href="/flapdisc"
                                                  class="rounded-md p-1 text-md font-medium text-white focus:text-[#FF781D]focus:shadow hover:text-[#FF781D]">
                                                  Flap Disc</a>
                                          </div>
                                      </div>
                                  </li>
                              </ol>
                            </div>
                        </div>

      </div>

      <section className='h-auto w-full p-12'>
                    <div className='text-center'>
                        <h1 className='text-4xl lg:text-7xl'><strong>Flap </strong>Disc</h1>
                        <p className='text-justify text lg:mx-28 pt-12'>Flap discs offer right angle grinding versatility with a product that can grind and finish in a single operation. The abrasive flaps are adhered to a rigid backing plate. It is the back plate that provides stability during operation with cooler cut, less vibration and smoother finish without gouging. Flap discs are well-suited to stock removal through blending applications. Flap Discs are best used for grinding, blending and finishing in one simple operation which saves you time and money on using multiple grinding tools. Haramain Abrasives Flap Discs offers the largest range of metal removal to finishing, and contour finishing, and are available in blending and finishing and high density.</p>
                    </div>
        </section>
        <ProductShow products={FlapDiscProducts} />
        
      <Footer/>
    </div>
  )
}

export default FlapDisc
