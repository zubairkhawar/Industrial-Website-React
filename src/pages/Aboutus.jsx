import React from 'react';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import DoneIcon from '@mui/icons-material/Done';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import MeetTeam from '../components/MeetTeam';
import Workers from '../components/Workers';
import ExperienceStat from '../components/ExperienceStat';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Aboutus = () => {
  return (
    <div>
      <Header />

        {/* Breadcrumb */}
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

        <Footer/>


    




    </div>
  )
}

export default Aboutus
