import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Achievement from '../components/Achievement'
import Card from '../components/Card'
import Video from '../components/Video'
import ExperienceStat from '../components/ExperienceStat'
import Counter from '../components/Counter'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const Home = () => {
  return (
    <div>
        
        <Hero />
        <ExperienceStat />
        <section className="flex flex-col lg:flex-row  my-12">
            <div className='flex ml-1 items-center order-1'>
                <div className='relative inline-flex lg:ml-[50px]'>
                    <img src="bg-img.jpg" alt='sandpaper' className='w-full h-auto '/>
                </div>
            </div>
            <div className='container flex flex-col order-2 m-4 mt-28 lg:mt-0 ml-auto w-full lg:w-[700px] p-4 lg:pr-32'>
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
        <Card/>
        <Video />
        <Achievement />
        <Counter/>
        <Footer />
    </div>
  )
}

export default Home
