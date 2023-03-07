import React from 'react';
import {useSelector} from "react-redux";
import BrandCard from "../../components/BrandCard";

const BrandsPage = () => {
    const brands = useSelector(state => state.brands);

    console.log(brands);

    return (
        <div className="w-[80%] mx-auto my-8">
            <h1 className="text-center text-2xl font-semibold mb-4">Popular Sneaker Brands</h1>
            <div className="flex flex-wrap my-8 w-full">
                {brands.map((brand) => <BrandCard key={brand.id} {...brand}/>)}
            </div>
        </div>

    );
};

export default BrandsPage;