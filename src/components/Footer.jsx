import React from 'react'
import { Divider } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '0.5px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };
  return (
    <div className='bg-[#161515] text-white text-center p-12 md:text-left'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='m-5'>
                    <h3 className='text-2xl'>Quick Link</h3>
                    <ul className='mt-6'>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/'>Home</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/aboutus'>About us</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/products'>Products</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/aboutus'>Our Team</a></li>
                    </ul>
                </div>
                <div className='m-5'>
                    <ul className='mt-14'>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/contactus'>Contact Us</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/faqs'>Faqs</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/blogs'>Blogs</a></li>
                    </ul>
                </div>
                <div className='m-5'>
                    <h3 className='text-2xl'>Our Services</h3>
                    <ul className='mt-6'>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline transition-all duration-300'><a href='/coatedabrasives'>Coated Abrasives</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/diamondcuttingblades'>Diamond Cutting Blades</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/steelgrindingdisc'>Steel & Grinding Disc</a></li>
                        <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/flapdisc'>Flap Disc</a></li>
                    </ul>
                </div>
                <div className='m-5 lg:text-center'>
                    <h3 className='text-2xl mb-6'>Follow Us</h3>
                    <a href='https://www.facebook.com/haramainabrasives'><FacebookOutlinedIcon fontSize='large' className='mx-1 transition duration-300 ease-in-out transform hover:scale-125' style={{ color: '#FE5E15' }} /></a>
                    <a href='instagram'><InstagramIcon fontSize='large' className='mx-1 transition duration-300 ease-in-out transform hover:scale-125' style={{ color: '#FE5E15' }}/></a>
                    <a href='https://www.linkedin.com/company/haramain-abrasive-industries/'><LinkedInIcon fontSize='large' className='mx-1 transition duration-300 ease-in-out transform hover:scale-125' style={{ color: '#FE5E15' }}/></a>

                </div>
            </div>



        </div>

        <div className='w-full my-8 bg-gray-700 p-0 mx-0 '>
                <Divider/></div>
        

        <div className='max-w-7xl mx-auto my-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='m-5'>
                    <h3 className='text-3xl mb-3'>Haramain Abrasives</h3>
                </div>
                <div className='m-5'>
                    <h3 className='text-2xl mb-3'>Location</h3>
                    <p>Lahore - 54000</p>
                    <p>Handoo Gujar Near Ring Road</p>
                    <p>Lahore, Pakistan</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-2xl mb-3'>Email Us</h3>
                    <p>info@haramainabrasives.com</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-2xl mb-3'>Hotline</h3>
                    <p>+92-336-640-1000</p>
                </div>


            </div>
        </div>

        <div className='mt-8 p-0 text-center'>
            Copyrights@2024. All rights reserved<span></span>
        </div>

    
      
    </div>
  )
}

export default Footer
