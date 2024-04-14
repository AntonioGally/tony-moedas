'use client';

import React, { createContext } from 'react';
import { DataContextInterface, DataContextProviderProps } from './types/data-context.types';
import useCoinbaseWebSocket from './hooks/useCoinbaseWebSocket/useCoinbaseWebSocket';

export const dataContext = createContext<DataContextInterface>({} as DataContextInterface);

const DataContextProvider = ({ children, initialData }: DataContextProviderProps) => {
    const { ticker } = useCoinbaseWebSocket(initialData.coinList);

    return <dataContext.Provider value={{ ticker, coinList: initialData.coinList }}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
