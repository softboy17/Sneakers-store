import React from 'react';
import Logo from '../../assets/logo.png'
import {HeartStraight, ShoppingCart} from "phosphor-react";
import {Link} from "react-router-dom";
import {BASKET_PAGE, BRANDS_PAGE, FAVORITES_PAGE, HOME_PAGE} from "../../constants/route";


const Header = () => {
    return (
        <div className="bg-gray-500">
            <div className='w-[80%] mx-auto items-center flex justify-between text-white'>
                <Link to={HOME_PAGE}>
                    <div>
                        <img src={Logo} alt='logo' className='w-[80px] h-[80px]'/>
                    </div>
                </Link>
                <Link to="/brands">
                    <div>
                        <nav>
                            <Link to={BRANDS_PAGE}>Бренды</Link>
                        </nav>
                    </div>
                </Link>
                <div className='flex text-white items-center mx-[20px]'>
                    <Link to={FAVORITES_PAGE}>
                        <div className='items-center flex-col flex mx-[20px] '>
                            <HeartStraight size={32}/>
                            <span className='text-xs'>Избранное</span>
                        </div>
                    </Link>
                    <Link to={BASKET_PAGE}>
                        <div className=' flex items-center flex-col'>
                            <ShoppingCart size={32}/>
                            <span className='text-xs'>Корзина</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;