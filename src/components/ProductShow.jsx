import React, { useState } from 'react';

const ProductShow = ({ products }) => {
    const [showZoomedImage, setShowZoomedImage] = useState(false);
    const [zoomedImageUrl, setZoomedImageUrl] = useState('');

    const openZoomedImage = (imageUrl) => {
        setZoomedImageUrl(imageUrl);
        setShowZoomedImage(true);
    };

    const closeZoomedImage = () => {
        setShowZoomedImage(false);
    };

    return (
        <div className="font-sans">
            {showZoomedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-sm sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-3/5 relative">
                        <div
                            className="absolute top-1 right-2 lg:m-3 lg:p-2 text-gray-600 hover:text-gray-800"
                            onClick={closeZoomedImage}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 lg:h-10 lg:w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        <img src={zoomedImageUrl} alt="Zoomed Image" className="w-full h-auto" />
                    </div>
                </div>
            )}

            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
                            onClick={() => openZoomedImage(product.picture)}
                        >
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img
                                    src={product.picture}
                                    alt={`Product ${index + 1}`}
                                    className="h-full w-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                                <h3 className="text-md font-normal text-gray-600">
                                    <strong>Type:</strong> {product.type}
                                </h3>
                                <h3 className="text-md font-normal text-gray-600">Brand: {product.brand}</h3>
                                <h3 className="text-md font-normal text-gray-600">Coating: {product.coat}</h3>
                                <h3 className="text-md font-normal text-gray-600">Bonding: {product.bonding}</h3>
                                <h3 className="text-md font-normal text-gray-600">Width: {product.width}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductShow;
