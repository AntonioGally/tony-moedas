'use client';

import React, { createContext, PropsWithChildren } from 'react';
import useProductTicker from '../hooks/use-product-ticker/use-product-ticker';
import { tickerType } from '../../context/data-context/types/ticker.type';
import { productsType } from '../../context/data-context/types/products.type';

type productDetailsContextType = {
    productTicker: tickerType | undefined;
    productInfo: productsType['products'][0];
};

export const productDetailsContext = createContext({} as productDetailsContextType);

const ProductDetailsProvider = ({
    children,
    productInfo,
}: PropsWithChildren<{ productInfo: productsType['products'][0] }>) => {
    const { ticker } = useProductTicker(productInfo.product_id);

    return (
        <productDetailsContext.Provider value={{ productTicker: ticker, productInfo }}>
            {children}
        </productDetailsContext.Provider>
    );
};

export default ProductDetailsProvider;
