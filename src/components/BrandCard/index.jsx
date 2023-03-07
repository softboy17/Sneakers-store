import React from 'react';

const BrandCard = ({id, logoUrl, name, description}) => {
    return (
        <div className="border w-[45%] flex flex-col my-4 mx-2 bg-gray-300 font-monts-sans">
            <img
                src="https://www.vectorkhazana.com/assets/images/products/Simpson_Nike_Svg.png"
                alt="img"
                className="w-full h-[350px]"
            />
            <div key={id} className="px-4 py-2">
                <div key={id} className="flex items-center">
                    <img src={logoUrl} alt={name} className="w-[80px] h-20 rounded-[50px]" />
                    <div className="ml-8">
                        <h2 className="text-lg font-semibold mt-2">{name}</h2>
                    </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{description}</p>

            </div>
        </div>
    );
};

export default BrandCard;