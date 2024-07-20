import React, { useContext } from 'react';
import { Button, Flex } from 'antd';
import style from './header-button.module.css';
import { productTableContext } from '../../product-table.context';

const HeaderButtons = () => {
    const { selectedFilter, setSelectedFilter } = useContext(productTableContext);
    return (
        <Flex dir="horizontal" gap={12} className={style.wrapper}>
            <Button
                size="large"
                type={selectedFilter === 'crypto' ? 'default' : 'text'}
                onClick={() => setSelectedFilter('crypto')}
            >
                Cryptos
            </Button>
            <Button
                size="large"
                type={selectedFilter === 'watchlist' ? 'default' : 'text'}
                onClick={() => setSelectedFilter('watchlist')}
            >
                Favorited cryptos
            </Button>
        </Flex>
    );
};

export default HeaderButtons;
