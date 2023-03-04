import React from 'react';
import {useSelector} from "react-redux";

const BrandsPage = () => {
    const brands = useSelector(state => state.brands);

    console.log(brands);

    return (
        <div className="w-[80%] mx-auto my-8">
            <h1 className="text-center text-2xl font-semibold mb-4">Popular Sneaker Brands</h1>
            <div className="flex flex-wrap justify-center my-8">
                {brands.map((brand) => (
                    <div key={brand.id} className="mx-4 my-4 border w-full py-2 px-4 flex">
                        <img src={brand.logoUrl} alt={brand.name} className="w-20 h-20" />
                        <div className="ml-8">
                            <h2 className="text-lg font-semibold mt-2">{brand.name}</h2>
                            <p className="text-sm text-gray-600 mt-2">{brand.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default BrandsPage;