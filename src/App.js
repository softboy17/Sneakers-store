import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import BrandsPage from "./pages/BrandsPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BASKET_PAGE, BRANDS_PAGE, FAVORITES_PAGE, HOME_PAGE} from "./constants/route";
import {useDispatch} from "react-redux";
import {fetchBrands, fetchSneakers} from "./redux/action";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchSneakers());
        dispatch(fetchBrands());
    }, [dispatch])

    return (
        <div className="container w-[80%] mx-auto">
            <Header/>
            <Routes>
                <Route path={HOME_PAGE} element={<HomePage/>}/>
                <Route path={FAVORITES_PAGE} element={<FavoritesPage/>}/>
                <Route path={BRANDS_PAGE} element={<BrandsPage/>}/>
                <Route path={BASKET_PAGE} element={<BasketPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
