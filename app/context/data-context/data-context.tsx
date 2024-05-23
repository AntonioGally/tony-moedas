'use client';

import React, { PropsWithChildren, createContext } from 'react';
import { statusType, tickerType } from './types/data-context.types';
import useTickerWebSocket from './hooks/ticker-web-socket/ticker-web-socket';
import useStatusWebSocket from './hooks/status-web-socket/status-web-socket';
interface DataContextInterface {
    ticker: tickerType[];
    products: statusType['products'];
}

export const dataContext = createContext<DataContextInterface>({} as DataContextInterface);

const DataContextProvider = ({ children }: PropsWithChildren) => {
    const { products } = useStatusWebSocket();
    const { ticker } = useTickerWebSocket(products);

    return <dataContext.Provider value={{ ticker, products }}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
