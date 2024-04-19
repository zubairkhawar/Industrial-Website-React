import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Faqs = () => {
  return (
    <div>
      <Header/>
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently Asked Questions</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Are you a factory or a trading company?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We’re a professional abrasives factory with over 30 years of experience.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Do you have certifications?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, Haramain Abrasives is certified with ISO 9001, along with a range of product patent certifications.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Can you provide free samples?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, we offer free samples, with shipping costs to be paid by the customer.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Do you offer international shipping?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, we provide global shipping to various countries. Shipping costs and times vary based on your location and order size. Please contact us for details.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>What payment methods do you accept?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We accept a range of payment methods, including LC at Sight, credit cards, bank transfers, and online payments.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>How do I choose the right abrasive product for my needs?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">The effectiveness of your application depends on the abrasive’s shape, hardness, and grit. Since every project is unique, selecting the right abrasive is crucial and varies with the material and desired finish. Our website offers detailed descriptions and specs to help you choose. For tailored advice, our experts are ready to provide personalized recommendations. Contact us for direct assistance.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Is there a minimum order quantity?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Minimum order quantities differ by product. Standard items typically require lower minimums than custom products. Please see our website for details or contact our sales team.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>What should I do if I have technical questions about the product?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">For any technical inquiries, our abrasives experts are ready to assist. Contact us via our form, email, or phone for prompt and expert advice.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Faqs;
