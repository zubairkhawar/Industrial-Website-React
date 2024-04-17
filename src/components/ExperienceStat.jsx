import React, { useState, useEffect } from 'react';

const ExperienceStat = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (count < 30) {
          setCount(prevCount => prevCount + 1);
        }
      }, 80); 
  
      return () => clearInterval(interval);
    }, [count]);
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-28 font-mono">
            <div className="relative pb-8">
            {/* Grey shadow circle */}
            <div className="absolute top-4 left-2 border-4 border-gray-300 rounded-full w-48 h-48 lg:w-60 lg:h-60 opacity-50"></div>
            
            {/* Orange circle */}
            <div className="flex justify-center items-center border-2 pt-4 border-[#FE5E15] rounded-full w-48 h-48 lg:w-60 lg:h-60">
                <h2 className="text-transparent text-7xl md:text-8xl xl:text-9xl font-bold mb-8" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'url("m8.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', padding: '15px', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', display: 'flex', backgroundColor: '' }}>{count}</h2>
            </div>
            </div>
            <h1 className="text-[#17262F] text-5xl md:text-6xl xl:text-7xl font-bold mb-6 lg:mb-12 lg:ml-16 lg:mr-6">Years Of</h1>
            <h1 className="text-transparent text-5xl md:text-6xl xl:text-7xl font-bold lg:mb-12" style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px black' }}>Experience</h1>
        </div>
    </div>
  )
}

export default ExperienceStat
