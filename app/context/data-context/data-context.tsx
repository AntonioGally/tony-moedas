'use client';

import React, { PropsWithChildren, createContext } from 'react';
import { tickerType } from './types/ticker.type';
import useTickerWebSocket from './hooks/ticker-web-socket/ticker-web-socket';
import { productsType } from './types/products.type';
interface DataContextInterface {
    ticker: { [key: string]: tickerType } | undefined;
    products: productsType;
}

export const dataContext = createContext<DataContextInterface>({} as DataContextInterface);

const DataContextProvider = ({ children, products }: PropsWithChildren<{ products: productsType }>) => {
    const { ticker } = useTickerWebSocket(products);

    return <dataContext.Provider value={{ ticker, products }}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
