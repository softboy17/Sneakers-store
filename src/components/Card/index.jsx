import React from 'react';
import {shortText} from "../../utils/shortText";

const Card = ({brand, model, color, price, description}) => {
    return (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 h-[500px]">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://via.placeholder.com/600x400" alt="" className="w-full"/>
                    <div className="px-4 py-4">
                        <h3 className="text-lg font-bold mb-2">{brand} {model}</h3>
                        <div className="flex items-center">
                            <p className="capitalize mr-[10px]"><b>color:</b></p>

                            {
                                color.toLowerCase().split("/")[0] === color.toLowerCase().split("/")[1] ?
                                    <div
                                        className={`w-[40px] h-[40px] rounded-[80px] bg-${color.toLowerCase().split("/")[0]}`}/>
                                    :
                                    <div className="flex">
                                        <div
                                            className={`w-[40px] h-[40px] rounded-[80px] bg-${color.toLowerCase().split("/")[0]}`}/>
                                        <div
                                            className={`w-[40px] h-[40px] rounded-[80px] bg-${color.toLowerCase().split("/")[1]}`}/>
                                    </div>
                            }

                        </div>
                        <p className="text-gray-700">{shortText(description)}</p>
                        <div className="mt-4">
                            <span className="text-lg font-bold text-gray-800">${price}</span>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right">Add
                                to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Card;