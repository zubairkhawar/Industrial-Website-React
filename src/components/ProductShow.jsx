import React from 'react'

const ProductShow = ({ products }) => {
  return (
    <div className="font-sans">
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
              <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                <img src={product.picture} alt={`Product ${index + 1}`} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <h3 className="text-md font-normal text-gray-600"><strong>Type:</strong> {product.type}</h3>
                <h3 className="text-md font-normal text-gray-600">Brand: {product.brand}</h3>
                <h3 className="text-md font-normal text-gray-600">Coating: {product.coat}</h3>
                <h3 className="text-md font-normal text-gray-600">Bonding: {product.bonding}</h3>
                <h3 className="text-md font-normal text-gray-600">Width: {product.width}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className='w-full h-auto pb-[100px] overflow-hidden text-center p-16'>
        <div>
            <h2 className='text-2xl inline-block text-[#121212] mb-[30px] border-solid border-gray-900 font-normal underline'>Grit Sizez Available</h2>
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
    </div>
  )
}

export default ProductShow
