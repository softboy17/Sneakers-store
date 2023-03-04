import React from 'react';
import Logo from '../../assets/logo.png'
import {HeartStraight, ShoppingCart} from "phosphor-react";


const Header = () => {
    return (
        <div className='w-[80%] mx-auto items-center flex justify-between bg-gray-500 text-white'>
            <a href="sneaker-store-app/src/components/header/header#">
                <div>
                    <img src={Logo} alt='logo' className='w-[80px] h-[80px]'/>
                </div>
            </a>
            <a href="sneaker-store-app/src/components/header/header#">
                <div>
                    <nav>
                        <a href="sneaker-store-app/src/components/header/header#">Бренды</a>
                    </nav>
                </div>
            </a>
            <div className='flex text-white items-center mx-[20px]'>
                <a href="sneaker-store-app/src/components/header/header#">
                    <div className='items-center flex-col flex mx-[20px] '>
                        <HeartStraight size={32}/>
                        <span className='text-xs'>Избранное</span>
                    </div>
                </a>
                <a href="sneaker-store-app/src/components/header/header#">
                    <div className=' flex items-center flex-col'>
                        <ShoppingCart size={32}/>
                        <span className='text-xs'>Корзина</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Header;