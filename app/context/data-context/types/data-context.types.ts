import { ReactNode } from 'react';
import { coinListType } from '../api/mock/coinList';
import { tickerType } from '../hooks/useCoinbaseWebSocket/coinbase.types';

export interface DataContextInterface {
    ticker: tickerType;
    coinList: coinListType;
}

export interface DataContextProviderProps {
    children: ReactNode;
    initialData: {
        coinList: coinListType;
    };
}
