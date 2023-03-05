import React, {useState} from 'react';
import Logo from '../../assets/logo.png'
import {HeartStraight, MagnifyingGlass, ShoppingCart} from "phosphor-react";
import {Link} from "react-router-dom";
import {BASKET_PAGE, BRANDS_PAGE, FAVORITES_PAGE, HOME_PAGE} from "../../constants/route";
import {motion} from "framer-motion"


const Header = () => {
    const handleInput = (event) => {
        const value = event.target.value;
        const length = value.length;
        const translateY = length * -2;
        const opacity = length > 0 ? 0.5 : 1;
        const scale = length > 0 ? 0.9 : 1;

        setState({
            translateY,
            opacity,
            scale
        });
    };

    const [state, setState] = useState({
        translateY: 0,
        opacity: 1,
        scale: 1
    });
    const [showInput, setShowInput] = useState(false);

    const handleClick = () => {
        setShowInput(prev => !prev);
        console.log(handleClick())
    };


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
                <div className='flex text-white items-center mx-[20px] justify-between w-[40%]'>

                    <div className='items-center flex-row flex '>
                        {!showInput ? (
                            <div className='items-center flex-col flex ' onClick={handleClick}>
                                <MagnifyingGlass size={32}/>
                                <span className='text-xs'>Поиск</span>
                            </div>
                        ) : (
                            <div className=' flex items-center mx-[20px] text-black'>
                                <motion.input
                                    style={{
                                        transform: `translateY(${state.translateY}px) scale(${state.scale})`,
                                        opacity: state.opacity
                                    }}
                                    onChange={handleInput}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5, opacity: 0}}
                                    initial={{x: 40}}
                                    placeholder='Поиск'
                                    type='text'
                                    className='rounded border-solid border-2 border-zinc-700'/>
                                <div className='items-center flex-col flex text-white ' onClick={handleClick}>
                                    <MagnifyingGlass size={32}/>
                                    <span className='text-xs'>Поиск</span>
                                </div>
                            </div>

                        )}
                    </div>
                    <Link to={FAVORITES_PAGE}>
                        <div className='items-center flex-col flex'>
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

export default Header