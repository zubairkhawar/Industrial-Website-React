import React from "react";

const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 bg-[#161515] lg:pb-10 lg:pt-[80px]">
        <div className="container lg:ml-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <SingleCard
              image="coated1.jpg"
              CardTitle="Coated Abrasives"
              titleHref="/coatedabrasives"
              CardDescription="Discover our versatile range of coated abrasives, from woodworking to metalworking, our coated abrasives deliver precision and durability to enhance your work efficiency."
            />
            <SingleCard
              image="diamond1.jpg"
              CardTitle="Diamond Cutting Blades"
              titleHref="/diamondcuttingblades"
              CardDescription="Explore our premium diamond cutting blades, engineered to deliver precise and clean cuts in various materials, including concrete, asphalt, stone, and more."
            />
            <SingleCard
              image="steel.jpg"
              CardTitle="Steel & Grinding Disc"
              titleHref="/steelgrindingdisc"
              CardDescription="Whether you're working with steel, stainless steel, or other metals, our discs deliver consistent performance and exceptional results."
            />
            <SingleCard
              image="flap1.jpg"
              CardTitle="Flap Disc"
              titleHref="/flapdisc"
              CardDescription="Experience superior grinding and finishing with our flap discs, designed to tackle a variety of surface preparation and blending tasks with ease."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  CardDescription,
  CardTitle,
  titleHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 mx-4 overflow-hidden rounded-lg bg-[white] shadow-1 duration-300 hover:shadow-3 ">
        <img src={image} alt="haramain products" className="w-full h-[220px]" />
        <div className="p-6 text-center sm:p-9 md:p-7 xl:p-6">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base leading-relaxed">
            {CardDescription}
          </p>

          
        </div>
      </div>
      {/*  */}
    </>
  );
};
