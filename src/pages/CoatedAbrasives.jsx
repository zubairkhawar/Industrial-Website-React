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
          type: 'Premium Quality Aluminium Oxide Cloth ',
          brand: 'Golden Peak',
          coat: 'Close Coat',
          bonding: 'Resin Over Resin',
          width: '50m',
          pictures: [
            "/src/assets/products/coatedabrasives/gproll1.jpg",
            "/src/assets/products/coatedabrasives/gproll1.jpg",
            "/src/assets/products/coatedabrasives/gproll1.jpg"
          ]
        },
        {

          picture: '/src/assets/products/coatedabrasives/horseroll1.jpg',
          name: 'Roll (Aluminium Oxide)',
          type: 'Best Quality Aluminium Oxide Cloth ',
          brand: 'Horse',
          coat: 'Close Coat',
          bonding: 'Resin Over Resin',
          width: '50m'
        },
        {
            picture: '/src/assets/products/coatedabrasives/atlasroll1.jpg',
            name: 'Roll (Aluminium Oxide)',
          type: 'Good Quality Aluminium Oxide Cloth ',
          brand: 'Atlas',
          coat: 'Close Coat',
          bonding: 'Resin Over Resin',
          width: '50m'
          },
        {
            picture: '/src/assets/products/coatedabrasives/sheetatlas.jpg',
            name: 'Sheet (Aluminium Oxide)',
            type: 'Aluminium Oxide Grain Cloth ',
            brand: 'Atlas',
            coat: 'Close Coat',
            bonding: 'Resin Over Resin',
        },
        {
            picture: '/src/assets/products/coatedabrasives/velcro1.jpg',
            name: 'Velcro Disc',
            type: '',
            brand: 'Golden Peak'

        },
        {
            picture: '/src/assets/products/coatedabrasives/Silicon_Carbide_Sheet_150-min.jpg',
            name: 'Silicon Carbide Water Proof',
            type: 'Silicon Carbide Craft Paper',
            brand: 'Golden Peak'
        },
        {
            picture: '/src/assets/products/coatedabrasives/Silicon_Carbide_Sheet_220-min.jpg',
            name: 'Silicon Carbide Latex Paper',
        },
        {
            picture: '/src/assets/products/coatedabrasives/fiberdisc1.jpg',
            name: 'Silicon Carbide Fiber Disc',
            type: 'Fiber ',
            brand: 'Golden Peak',
            coat: 'Close Coat',
            bonding: 'Resin Over Resin',
            width: '1370mm'
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
                        <h1 className='text-4xl lg:text-7xl'><strong>Coated </strong>Abrasives</h1>
                        <p className='text-justify text lg:mx-28 pt-12'>Haramain abrasives manufactures and markets a wide range of coated abrasives products coated abrasives are made of various abrasive grains bonded to a backing material of paper, cloth or vulcanised fibre. These abrasive products are used for all sanding processes from rough to final finishing - in the construction, metal, wood, and stone industries.We believe in delivering right choices that matter. Our abrasives are classified in BEST, BETTER, and GOOD performance price tiers to help you choose the right product for your specific application every time.</p>
                    </div>
        </section>
        <ProductShow products={coatedAbrasivesProducts} />
        <section className='w-full h-auto pb-[100px] overflow-hidden text-center p-16'>
        <div>
            <h2 className='text-2xl inline-block text-[#121212] mb-[30px] border-solid border-gray-900 font-normal underline'>Grit Size Available</h2>
            <ul className='overflow-hidden text-center'>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>16</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>24</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>36</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>40</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>50</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>60</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>80</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>100</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>120</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>150</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>180</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>220</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>240</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>280</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-[#000] bg-[#000]'></div>
                    <p className='text-[13px] text-[#888]'>320</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>360</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>400</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>500</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>800</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>1000</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>1200</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>1500</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>2000</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>2500</p>
                </li>
                <li className='mr-[1%] mt-[1%] float-left min-w-[34px] w-[2.884%]'>
                    <div className='w-full h-[36px] box-border border border-solid border-gray-300'></div>
                    <p className='text-[13px] text-[#888]'>3000</p>
                </li>
            </ul>
        </div>
        
    </section>
      <Footer/>
    </div>
  )
}

export default CoatedAbrasives
