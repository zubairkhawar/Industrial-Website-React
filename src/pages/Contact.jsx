import React, { useState } from 'react';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Contact = () => {
  const [state, handleSubmit] = useForm("xvoedzev");
  if (state.succeeded) {
      return <p>Thanks for contacting!</p>;
  }
  return (
    <div>
        <Header />

        <section>
        <div className='relative w-full h-[600px] bg-cover '>
                <img src='bg-hero.jpeg' alt='Background' className='w-full h-full object-cover' />

                {/* Overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>

                {/* Content */}
                <div className='absolute top-1/2 lg:right-2/4 transform -translate-y-1/2 text-left font-roboto text-cream z-10 pl-5 lg:pl-0'>
                    <h1 className='text-4xl lg:text-8xl mb-4 font-sans font-bold' >
                    Contact Us
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
                                            Contact Us </a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>

            
        </section>


        <section className='w-full h-auto mx-auto lg:h-[460px]'>
            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-28 py-8 lg:ml-28'>
                <svg width={350} height={350} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 248 248' fill='none'>
                    <path d='M62.091 65.4055L63.0906 65.4311L63.0924 65.3629L63.0848 65.2951L62.091 65.4055ZM61.8148 76.1778L60.8151 76.1522L60.8148 76.165V76.1778H61.8148ZM66.5104 80.8735V79.8735H66.455L66.4 79.8796L66.5104 80.8735ZM152.137 80.8735L152.844 81.5806L154.551 79.8735H152.137V80.8735ZM166.5 95.2366L167.5 95.2333L167.492 92.8301L165.793 94.5295L166.5 95.2366ZM166.776 181.139L167.77 181.249L167.776 181.193L167.776 181.136L166.776 181.139ZM171.472 185.835L171.472 186.835H171.484L171.497 186.834L171.472 185.835ZM182.244 185.558L182.354 184.565L182.286 184.557L182.218 184.559L182.244 185.558ZM61.0913 65.3799L60.8151 76.1522L62.8144 76.2035L63.0906 65.4311L61.0913 65.3799ZM60.8148 76.1778C60.8148 79.4227 63.4354 82.2213 66.6208 81.8673L66.4 79.8796C64.6136 80.0781 62.8148 78.4572 62.8148 76.1778H60.8148ZM66.5104 81.8735H152.137V79.8735H66.5104V81.8735ZM151.429 80.1664L57.2407 174.355L58.6549 175.769L152.844 81.5806L151.429 80.1664ZM57.2407 174.355C54.8791 176.717 55.2315 180.389 57.2407 182.399L58.6549 180.984C57.3495 179.679 57.1494 177.275 58.6549 175.769L57.2407 174.355ZM57.2407 182.399L64.9746 190.133L66.3888 188.718L58.6549 180.984L57.2407 182.399ZM64.9746 190.133C67.2987 192.457 70.694 192.457 73.018 190.133L71.6038 188.718C70.0608 190.261 67.9318 190.261 66.3888 188.718L64.9746 190.133ZM73.018 190.133L167.207 95.9437L165.793 94.5295L71.6038 188.718L73.018 190.133ZM165.5 95.2398L165.776 181.142L167.776 181.136L167.5 95.2333L165.5 95.2398ZM165.782 181.029C165.428 184.214 168.227 186.835 171.472 186.835L171.472 184.835C169.192 184.835 167.571 183.036 167.77 181.249L165.782 181.029ZM171.497 186.834L182.27 186.558L182.218 184.559L171.446 184.835L171.497 186.834ZM182.133 186.552C185.319 186.906 187.94 184.108 187.939 180.863L185.94 180.863C185.94 183.142 184.141 184.763 182.354 184.565L182.133 186.552ZM187.939 180.863L187.94 65.4055H185.94L185.94 180.863L187.939 180.863ZM187.94 65.4055C187.94 63.7849 187.368 62.3484 186.335 61.3148C185.301 60.2812 183.864 59.7099 182.244 59.7099V61.7099C183.385 61.7099 184.297 62.1053 184.92 62.729C185.544 63.3527 185.94 64.264 185.94 65.4055H187.94ZM182.244 59.7099H66.7866V61.7099H182.244V59.7099ZM66.7866 59.7099C63.5417 59.7099 60.7431 62.3305 61.0971 65.5159L63.0848 65.2951C62.8864 63.5087 64.5072 61.7099 66.7866 61.7099V59.7099Z' fill='#FE5E15'></path>
                </svg>
                <div className='px-6'>
                    <h1 className='text-2xl lg:text-3xl font-bold uppercase'>Lahore</h1>
                    <div className='border-b border-black w-full mt-2 mb-4 pb-2'></div>
                    <p className='pb-4'>Lahore 54000, Handoo Gujar<br />Near Ring Road, Lahore Pakistan</p>
                    <p className='text-[#FE5E15]'>info@haramainabrasives.com</p>
                    <div className='flex py-4 items-center'>
                        <div className='w-8 h-8 rounded-full bg-[#FE5E15] flex items-center justify-center'>
                        <PhoneEnabledIcon style={{ color: '#fff' }} fontSize='' />
                        </div>
                        <p className='pl-4'>+92-336-640-1000</p>
                    </div>
                </div>
                
            </div>
        </section>



      <section className="mb-32">
        <div id="map" className="relative h-[680px] overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:px-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d771.8523787825553!2d74.44234754488232!3d31.603949143388068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1713203833880!5m2!1sen!2s" width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className="container px-2 md:px-12 xl:mx-24">
          <div className="block lg:h-[600px] rounded-lg bg-[#F6F6F6] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput90"
                      placeholder="Name"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput90"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91"
                      placeholder="Email address"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput91"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] lg:h-[250px] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    >
                      Message
                    </label>
                  </div>
                  <div className="mb-6 flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="peer h-4 w-4 text-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      id="exampleCheck1"
                    />
                    <label
                      className="ml-2 text-neutral-700"
                      htmlFor="exampleCheck1"
                    >
                      I agree to the Privacy Policy
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-opacity-90 text-white w-[260px] lg:w-[400px]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200 ease-linear"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                        <div className="shrink-0">
                        <div className="inline-block rounded-md bg-gray-200 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>
                        </div>
                        </div>
                        <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Support</p>
                        <p className="text-sm text-neutral-500">info@harmainabrasives.com</p>
                        </div>
                    </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                        <div className="shrink-0">
                        <div className="inline-block rounded-md bg-gray-200 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>
                        </div>
                        <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Address</p>
                        <p className="text-sm text-neutral-500">Lahore, 54000<br />Handoo Gujar Near Ring Road, Lahore Pakistan<br /></p>
                        </div>
                    </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                        <div className="shrink-0">
                        <div className="inline-block rounded-md bg-gray-200 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                        </div>
                        <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Whatsapp</p>
                        <p className="text-sm text-neutral-500">+92-336-640-1000</p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                        <div className="shrink-0">
                        <div className="inline-block rounded-md bg-gray-200 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>
                        </div>
                        </div>
                        <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Mobile</p>
                        <p className="text-neutral-500">+92-336-640-1000</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
};

export default Contact;
