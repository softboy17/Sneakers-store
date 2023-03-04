import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSneakers} from "../../redux/action";
import Cards from "../../components/Cards";


const HomePage = () => {
    const sneakers = useSelector(state => state.sneakers);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchSneakers())
    }, [])


    return (
        <div className="container mx-auto">
            <Cards/>
        </div>
    );
};

export default HomePage;