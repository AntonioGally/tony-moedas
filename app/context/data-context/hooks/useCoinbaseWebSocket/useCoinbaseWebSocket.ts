import { useEffect, useState } from 'react';
import { coinListType } from '../../api/mock/coinList';
import { tickerType } from './coinbase.types';

function useCoinbaseWebSocket(coinList: coinListType) {
    const [ticker, setTicker] = useState<tickerType>({} as tickerType);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const ws = new WebSocket('wss://ws-feed.exchange.coinbase.com');

        ws.onopen = () => {
            console.log('WebSocket Connected');
            ws.send(
                JSON.stringify({
                    type: 'subscribe',
                    product_ids: coinList.map((coin) => `${coin.id}`),
                    channels: ['ticker_batch'],
                    // type: 'subscribe',
                    // channels: [{ name: 'status' }],
                }),
            );
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'ticker' && message.product_id) {
                setTicker((current) => ({
                    ...current,
                    [message.product_id]: message,
                }));
            }
        };

        ws.onerror = (event) => {
            console.error('WebSocket Error:', event);
            setError('Failed to connect to WebSocket.');
        };

        ws.onclose = () => {
            console.log('WebSocket Disconnected');
        };

        return () => {
            ws.close();
        };
    }, [coinList]);

    return { ticker, error };
}

export default useCoinbaseWebSocket;
