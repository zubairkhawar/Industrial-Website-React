import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
        style={{backgroundImage: "url(/blog1.webp"}}>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-80"></div>

        <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
          <h1 className="text-5xl">We are <b>Coming</b> soon!</h1>
          <p>Stay tuned for something amazing!!!</p>

          <div className="mt-10 mb-5">
            <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
              <div className="rounded-full bg-[#FE5E15] text-xs leading-none text-center text-white py-1"
                style={{width: '75%'}}>75%</div>
            </div>
          </div>

          <div className="mt-6 flex text-white mx-auto">
            <a href="https://www.facebook.com/haramainabrasives">
              <svg fill="currentColor" className="cursor-pointer h-6 mr-2" viewBox="0 0 24 24" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                xmlnsSerif="http://www.serif.com"
                style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}}>
                <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/haramain-abrasive-industries/">
              <svg fill="currentColor" className="cursor-pointer h-6 mr-2" viewBox="0 0 24 24" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                xmlnsSerif="http://www.serif.com"
                style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}}>
                <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
