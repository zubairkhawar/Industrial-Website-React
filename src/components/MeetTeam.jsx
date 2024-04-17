import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';

const TeamMember = ({ name, role, imageUrl, facebookLink, GmailLink}) => (
    <div className="text-center bg-white">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="p-4">
        <div className="text-md">
          <h3 className="hover:text-[#FE5E15] text-gray-900 font-semibold transition duration-500 ease-in-out">{name}</h3>
          <p className="text-gray-500 uppercase text-sm">{role}</p>
        </div>
        <div className="mt-6 flex justify-center items-center">
          {/* Social icons */}
          <a href={facebookLink} className="mr-3">
            <FacebookIcon fontSize='medium' />
          </a>
          <a href={GmailLink} className="mr-3 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>
            </svg>
          </a>
          <a href="#">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              {/* LinkedIn icon SVG code */}
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

const MeetTeam = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="py-10 max-w-screen-lg mx-auto">
      <div className="text-center mb-16">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">THE TEAM</p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-[#FE5E15]"> Team</span>
        </h3>
        <p className='pt-4 px-2 text-center'>We are a family-owned business specializing in the manufacture and sale of abrasive materials and tools. Our team of experts have a combined experience of over 30 years in the abrasive industry. We strive to provide exceptional customer service and quality products that meet and exceed our customers’ expectations. Our team is comprised of a diverse group of individuals who are passionate about our products and the industry. We are committed to providing our customers with the best abrasive solutions and unparalleled customer service. We look forward to working with you and providing you with the best abrasive products available.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Individual team members */}
        <TeamMember name="Amjad Hameed" role="CEO" imageUrl="src/assets/team/Amjad.jpeg" facebookLink="https://www.facebook.com/amjad.hameed.1088?mibextid=LQQJ4d" GmailLink=""/>
        <TeamMember name="Khawar Hameed" role="COO" imageUrl="src/assets/team/Khawar.jpeg" facebookLink="https://www.facebook.com/hameed.hameed.52?mibextid=LQQJ4d" GmailLink="mailto: bigmashabrum@gmail.com" />
        <TeamMember name="Faisal Waqar" role="Director Accounts & Finance" imageUrl="src/assets/team/faisal.jpeg" facebookLink="https://www.facebook.com/faisal.waqar.775?mibextid=LQQJ4d" />
        <TeamMember name="Hassan Hameed Chadda" role="Director Sales" imageUrl="src/assets/team/hassan.jpeg" facebookLink="https://www.facebook.com/hasanchada?mibextid=LQQJ4d" />
        {/* Add more team members as needed */}
      </div>
    </div>
  </div>
  )
}

export default MeetTeam
