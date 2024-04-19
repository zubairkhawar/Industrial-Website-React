import React from 'react'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductShow from '../components/ProductShow';
const Products = () => {
  return (
    <div>

      <Header />

      {/* Hero Section */}

      <div className='relative w-full h-[600px] bg-cover '>
                      <img src='Products.jpg' alt='Background' className='w-full h-full object-cover' />

                      {/* Overlay */}
                      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>

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

        <section className='h-auto w-full p-12'>
                    <div className='text-center'>
                        <h1 className='text-5xl lg:text-7xl'>See our <strong>Products</strong></h1>
                        <p className='text-justify text lg:mx-28 pt-12'>Haramain Abrasives categorises in signature <em>GOLDEN PEAK</em>, <em>ATLAS</em> and <em>HORSE</em> brands. Our complete line of Best, Better, Good and Standard tier abrasive products are designed to meet the toughest standards and provide superior performance for a variety of applications. From woodworking to automotive, grinding to cutting, blending or finishing, our abrasives provide the perfect solution at every-day value pricing and performance. With our extensive experience and commitment to quality, you can trust Harmain Abrasives to get the job done right. Leverage our years of experience for a total brand solution that stands apart from the competition.</p>
                    </div>
        </section>

        <section className='h-auto w-full p-16'>
                <div>
                    <ul className='flex flex-col lg:flex-row lg:mx-28 lg:gap-32'>
                        <li className='relative lg:w-1/2'>
                            <a href="/coatedabrasives">
                                <img src='roll.png' className='w-full h-auto'/>
                            </a>
                        </li>
                        <li className='flex flex-col text-justify lg:p-12 lg:w-1/2'>
                            <a href="/coatedabrasives" className='text-4xl text-[#FE5E15]'>Coated Abrasives</a>
                            <h3 className='text-2xl py-4 text-blue-800'>Haramain abrasives manufactures and markets a wide range of coated abrasives products.</h3>
                            <p className='text-gray-600'>Our coated abrasives fit all of your sanding needs whether you are sanding down rough surfaces or smoothing out a fine finish, from fine grits for furniture and cabinet making to coarse grits for heavy-duty sanding on decks and outdoor furniture. We offer both silicon carbide and aluminum oxide abrasives in various brands, as well as specialty sanding products such as belts and discs. Our abrasives are classified in BEST, BETTER, and GOOD performance price tiers to help you choose the right product for your specific application every time.</p>
                        </li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row lg:mx-28 lg:gap-32'>
                        <li className='relative lg:w-1/2 lg:order-2'>
                            <a href="/diamondcuttingblades">
                                <img src='2.png' className='w-full h-auto '/>
                            </a>
                        </li>
                        <li className='flex flex-col text-justify lg:p-12 lg:w-1/2 order-1'>
                            <a href="/diamondcuttingblades" className='text-4xl text-[#FE5E15]'>Diamond Cutting Blades</a>
                            <h3 className='text-2xl py-4 text-blue-800'>We offer a wide range of different diamond cutting discs in our program.</h3>
                            <p className='text-gray-600'>You can choose from discs with block segments or blades with a continuous rim. The different quality categories enable you to find the best suitable diamond disc for your application and the material to be cut. Diamond cutting tools for dry and wet cutting of many different materials, such as asphalt, concrete, brick, granite, marble, tiles, ceramic, refractory bricks and many others.</p>
                        </li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row lg:mx-28 lg:gap-32'>
                        <li className='relative lg:w-1/2'>
                            <a href="/steelgrindingdisc">
                                <img src='3.png' className='w-full h-auto'/>
                            </a>
                        </li>
                        <li className='flex flex-col text-justify lg:p-12 lg:w-1/2'>
                            <a href="/steelgrindingdisc" className='text-4xl text-[#FE5E15]'>Steel & Grinding Disc</a>
                            <h3 className='text-2xl py-4 text-blue-800'>We are actively engaged in offering Grinding Wheels.</h3>
                            <p className='text-gray-600'>Used to cut steel and masonry block, offered grinding wheel is commended in the market for its excellent cutting. This grinding wheel is developed by vendor’s skillful workforce utilizing the high grade material and advanced techniques. Stainless Grinding Wheels for use on metal items from hard alloys down to softer mild steels and can be used for applications which require fast stock removal. CoreTemp Abrasives Ultra Stainless Grinding delivers 50% faster grinding so it is ideal for those larger jobs.</p>
                        </li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row lg:mx-28 lg:gap-32'>
                        <li className='relative lg:w-1/2 lg:order-2'>
                            <a href="/flapdisc">
                                <img src='Flap-Disc-Premium2-min-removebg-preview.png' className='w-full h-auto'/>
                            </a>
                        </li>
                        <li className='flex flex-col text-justify lg:p-12 lg:w-1/2 order-1'>
                            <a href="/flapdisc" className='text-4xl text-[#FE5E15]'>Flap Disc</a>
                            <h3 className='text-2xl py-4 text-blue-800'>Flap discs offer right angle grinding versatility with a product that can grind and finish in a single operation.</h3>
                            <p className='text-gray-600'>The abrasive flaps are adhered to a rigid backing plate. It is the back plate that provides stability during operation with cooler cut, less vibration and smoother finish without gouging. Flap discs are well-suited to stock removal through blending applications. Flap Discs are best used for grinding, blending and finishing in one simple operation which saves you time and money on using multiple grinding tools. Haramain Abrasives Flap Discs offers the largest range of metal removal to finishing, and contour finishing, and are available in blending and finishing and high density.</p>
                        </li>
                    </ul>
                </div>

                
        </section>
    

      <Footer />

    </div>
  )
}

export default Products
