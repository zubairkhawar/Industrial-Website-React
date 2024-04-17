import React, { useState, useEffect } from 'react';

const Workers = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (count < 50) {
          setCount(prevCount => prevCount + 1);
        }
      }, 50); 
  
      return () => clearInterval(interval);
    }, [count]);
  return (

    <section className='w-full h-auto'>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-14 lg:mt-28 font-mono">
            <h1 className="text-[#17262F] text-6xl xl:text-7xl font-bold mb-12 lg:mr-14">We've</h1>
            <div className="relative pb-8">
            {/* Grey shadow circle */}
            <div className="absolute top-4 left-2 border-4 border-gray-300 rounded-full w-48 h-48 lg:w-48 lg:h-48 opacity-50"></div>
            
            {/* Orange circle */}
            <div className="flex justify-center items-center border-2 pt-4 border-[#FE5E15] rounded-full w-48 h-48 lg:w-48 lg:h-48">
                <h2 className="text-transparent text-7xl lg:text-8xl font-bold mb-8" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'url("s12.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', padding: '15px', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', display: 'flex', backgroundColor: '' }}>{count}</h2>
            </div>
            </div>
            <h1 className="text-[#17262F] text-6xl xl:text-7xl font-bold mb-8 lg:mb-12 lg:ml-16 lg:mr-6">Expert</h1>
            <h1 className="text-transparent text-6xl xl:text-7xl font-bold lg:mb-12" style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px black' }}>Workers</h1>
        </div>
        
        
        <div className="w-[80%] border-t-2 border-gray-300 my-16 lg:my-36 mx-auto"></div>

        {/* Stats */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 my-12 lg:pb-12 mx-auto '>
            <div className='flex flex-col'>
                <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                <path d="M17.25 7.5H10.5V0.75C10.5 0.375 10.125 0 9.75 0H8.25C7.82812 0 7.5 0.375 7.5 0.75V7.5H0.75C0.328125 7.5 0 7.875 0 8.25V9.75C0 10.1719 0.328125 10.5 0.75 10.5H7.5V17.25C7.5 17.6719 7.82812 18 8.25 18H9.75C10.125 18 10.5 17.6719 10.5 17.25V10.5H17.25C17.625 10.5 18 10.1719 18 9.75V8.25C18 7.875 17.625 7.5 17.25 7.5Z" fill="#FE5E15"/>
                </svg>
                </div>
                <div className="mr-4">
                    <h2 className="text-[#17262F] text-6xl lg:text-8xl font-semibold">100</h2>
                </div>
            </div>
            <div className=''>
                <div className="w-[50%] h-[2px] bg-[#FE5E15] mr-4 mb-[20px]"></div>
                <div>
                <h4 className="mt-2 text-[#4A5257] font-semibold text-lg ">Cities</h4>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                <path d="M17.25 7.5H10.5V0.75C10.5 0.375 10.125 0 9.75 0H8.25C7.82812 0 7.5 0.375 7.5 0.75V7.5H0.75C0.328125 7.5 0 7.875 0 8.25V9.75C0 10.1719 0.328125 10.5 0.75 10.5H7.5V17.25C7.5 17.6719 7.82812 18 8.25 18H9.75C10.125 18 10.5 17.6719 10.5 17.25V10.5H17.25C17.625 10.5 18 10.1719 18 9.75V8.25C18 7.875 17.625 7.5 17.25 7.5Z" fill="#FE5E15"/>
                </svg>
                </div>
                <div className="mr-4">
                    <h2 className="text-[#17262F] text-6xl lg:text-8xl font-semibold">98%</h2>
                </div>
            </div>
            <div>
                <div className="w-[50%] h-[2px] bg-[#FE5E15] mr-4 mb-[2px]"></div>
                <div>
                <h4 className="mt-2 text-[#4A5257] font-semibold text-lg ">Success<br/>Rate</h4>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                <path d="M17.25 7.5H10.5V0.75C10.5 0.375 10.125 0 9.75 0H8.25C7.82812 0 7.5 0.375 7.5 0.75V7.5H0.75C0.328125 7.5 0 7.875 0 8.25V9.75C0 10.1719 0.328125 10.5 0.75 10.5H7.5V17.25C7.5 17.6719 7.82812 18 8.25 18H9.75C10.125 18 10.5 17.6719 10.5 17.25V10.5H17.25C17.625 10.5 18 10.1719 18 9.75V8.25C18 7.875 17.625 7.5 17.25 7.5Z" fill="#FE5E15"/>
                </svg>
                </div>
                <div className="mr-4">
                    <h2 className="text-[#17262F] text-6xl lg:text-8xl font-semibold">30</h2>
                </div>
            </div>
            <div>
                <div className="w-[50%] h-[2px] bg-[#FE5E15] mr-4 mb-[12px]"></div>
                <div>
                <h4 className="mt-2 text-[#4A5257] font-semibold text-lg pt-[20px]">Years of<br/>Experience</h4>
                </div>
            </div>
        </div>





    </section>
    













  )
}

export default Workers
