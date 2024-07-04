'use client';

import React, { PropsWithChildren, createContext } from 'react';
import { tickerType } from './types/ticker.type';
import useTickerWebSocket from './hooks/ticker-web-socket/ticker-web-socket';
import { productsType } from './types/products.type';
import { chartDataType } from '@/app/(Home)/components/product-table/components/small-line-chart/utils/get-chart-data';
interface DataContextInterface {
    ticker: { [key: string]: tickerType } | undefined;
    products: productsType;
    chartData: chartDataType;
}

export const dataContext = createContext<DataContextInterface>({} as DataContextInterface);

const DataContextProvider = ({
    children,
    products,
    chartData,
}: PropsWithChildren<{ products: productsType; chartData: chartDataType }>) => {
    const { ticker } = useTickerWebSocket(products);

    return <dataContext.Provider value={{ ticker, products, chartData }}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
