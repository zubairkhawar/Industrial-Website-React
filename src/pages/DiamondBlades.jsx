import React from 'react'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DiamondBlades = () => {
    const SteelGrindingDiscProducts = [
        {
        picture: 'src/assets/products/diamondcuttingblades/DSC 04355-min.jpg',
          name: 'Diamond Saw Blade Extra',
          type: 'Granite Cutter',
          brand: 'Golden Peak',
        },
        {
        picture: 'src/assets/products/diamondcuttingblades/DSC 04351-min.jpg',
        name: 'Diamond Saw Blade Segment',
        type: 'Granite Cutter',
        brand: 'Golden Peak',
        },
        {
        picture: 'src/assets/products/diamondcuttingblades/DSC 04348-min.jpg',
        name: 'Diamond Saw Blades Turbo',
        type: 'Granite Cutter',
        brand: 'Golden Peak',
        },
        {
        picture: 'src/assets/products/diamondcuttingblades/DSC 04350-min.jpg',
        name: 'Diamond Saw Blade Super Thin',
        type: 'Tile Cutter',
        brand: 'Golden Peak',
        },
        {
        picture: 'src/assets/products/diamondcuttingblades/DSC 04343-min.jpg',
        name: 'TCT Saw Blades',
        type: '9-inch Diameter',
        brand: 'Golden Peak',
        },
        {
        picture: 'src/assets/products/diamondcuttingblades/DSC 04339-min.jpg',
        name: 'TCT Saw Blades',
        type: '5-inch Diameter',
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
                          Diamond Cutting Blades
                          </h1>

                          {/* Breadcrumb */}
                          <div className='flex pt-8 text-xs lg:text-xl'>
                              <ol role="list" className="flex items-center">
                                  <li className="text-left">
                                      <div className="-m-1">
                                          <a href="/"
                                              className="rounded-md p-1 text-md font-medium text-white focus:text-gray-900 focus:shadow hover:text-[#FF781D]">
                                              Home </a>
                                      </div>
                                  </li>

                                  <li className="text-left">
                                      <div className="flex items-center">
                                          <span className="mx-2 text-white"><ArrowForwardIosOutlined fontSize='small'/></span>
                                          <div className="-m-1">
                                              <a href="/products"
                                                  className="rounded-md p-1 text-md font-medium text-white focus:text-[#FF781D]focus:shadow hover:text-[#FF781D]">
                                                  Products </a>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="text-left">
                                      <div className="flex items-center">
                                          <span className="mx-2 text-white"><ArrowForwardIosOutlined fontSize='small'/></span>
                                          <div className="-m-1">
                                              <a href="/diamondcuttingblades"
                                                  className="rounded-md p-1 text-md font-medium text-white focus:text-[#FF781D]focus:shadow hover:text-[#FF781D]">
                                                  Diamond Cutting Blades </a>
                                          </div>
                                      </div>
                                  </li>
                              </ol>
                            </div>
                        </div>

      </div>

      <section className='h-auto w-full p-12'>
                    <div className='text-center'>
                        <h1 className='text-4xl lg:text-7xl'><strong>Diamond </strong>Cutting Blades</h1>
                        <p className='text-justify text lg:mx-28 pt-12'>We offer a wide range of different diamond cutting discs in our program. You can choose from discs with block segments or blades with a continuous rim. The different quality categories enable you to find the best suitable diamond disc for your application and the material to be cut. Diamond cutting tools for dry and wet cutting of many different materials, such as asphalt, concrete, brick, granite, marble, tiles, ceramic, refractory bricks and many others.</p>
                    </div>
                    
        </section>
        <ProductShow products={SteelGrindingDiscProducts}/>
        <Footer/>
      
    </div>
  )
}

export default DiamondBlades
