import React from 'react';
import {useSelector} from "react-redux";
import Card from "../Card";

const Cards = () => {
    const sneakers = useSelector(state => state.sneakers);

    if (sneakers.length === 0){
        return <p>Извините, данный товар временно отсутствует в наличии</p>
    }

    return (
        <div className="flex flex-wrap -mx-4 my-[30px]">
            {
                sneakers.map(item => {
                    return <Card {...item}/>
                })
            }
        </div>
    )
};

export default Cards;