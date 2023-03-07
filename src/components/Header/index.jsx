import React, {useState} from 'react';
import {HeartStraight, MagnifyingGlass, ShoppingCart} from "phosphor-react";
import {Link} from "react-router-dom";
import {BASKET_PAGE, BRANDS_PAGE, FAVORITES_PAGE, HOME_PAGE} from "../../constants/route";
import {motion} from "framer-motion"
import {useDispatch, useSelector} from "react-redux";
import {searchTitle} from "../../redux/action";


const Header = () => {
    const [searchText, setSearchText] = useState('');
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch();

    const handleInput = (event) => {
        const value = event.target.value;
        const length = value.length;

        setSearchText(value);
        dispatch(searchTitle(value));
    };

    const handleClick = () => {
        setShowInput(!showInput);
    };


    return (
        <div className="bg-gray-500">
            <div className='w-[80%] mx-auto items-center flex justify-between text-white'>
                <Link to={HOME_PAGE}>
                    <div>
                        <img src='/img/logo.png' alt='logo' className='w-[80px] h-[80px]'/>
                    </div>
                </Link>
                <div>
                    <nav>
                        <Link to={BRANDS_PAGE}>Бренды</Link>
                    </nav>
                </div>
                <div className='flex text-white items-center mx-[20px] justify-between w-[50%]'>
                    <div className='items-center flex-row flex  '>
                        <motion.input
                            onChange={handleInput}
                            value={searchText}
                            placeholder='Поиск'
                            type='text'
                            animate={{
                                x: showInput ? 0 : '200%',
                                opacity: showInput ? 1 : 0,
                                transition: {
                                    display: showInput ? 'block' : 'none',
                                    duration: 0.5, ease: 'easeInOut'
                                },
                            }}
                            transition={{duration: 0.5, ease: 'easeInOut'}}
                            initial={{x: '100%', opacity: 0}}
                            exit={{
                                x: '-100%',
                                opacity: 0,
                                transition: {duration: 0.5, ease: 'easeInOut'},
                            }}
                            className={`w-full mr-5 p-4 pl-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        />

                        <motion.button className='items-center flex-col flex ' onClick={handleClick}>
                            <MagnifyingGlass size={32}/>
                            <span className='text-xs'>Поиск</span>
                        </motion.button>
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