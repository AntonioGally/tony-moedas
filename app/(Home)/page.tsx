'use client';

import { useContext } from 'react';
import { globalContext } from '../context/globalContext/globalContext';
import ProductTable from './components/product-table';
import style from './home.module.css';

const Home = () => {
    const { theme } = useContext(globalContext);
    return (
        <div className={`${style.wrapper} ${theme === 'dark' ? style.dark : ''}`}>
            <ProductTable />
        </div>
    );
};

export default Home;
