import { tickerType } from '@/app/context/data-context/types/ticker.type';
import { useEffect, useState } from 'react';

const useProductTicker = (productId: string) => {
    const [ticker, setTicker] = useState<tickerType>();

    useEffect(() => {
        const tickerWebSocket = new WebSocket('wss://ws-feed.exchange.coinbase.com');

        function handleMessage(event: MessageEvent) {
            const message = JSON.parse(event.data) as tickerType;
            setTicker(message);
        }

        tickerWebSocket.onopen = () => {
            tickerWebSocket.send(
                JSON.stringify({
                    type: 'subscribe',
                    product_ids: [productId],
                    channels: ['ticker_batch'],
                }),
            );
        };

        tickerWebSocket.onmessage = handleMessage;

        tickerWebSocket.onerror = (event) => {
            console.error('WebSocket Error:', event);
        };

        tickerWebSocket.onclose = () => {
            console.log('WebSocket Disconnected');
        };

        return () => {
            tickerWebSocket.close();
        };
    }, [productId]);

    return { ticker };
};

export default useProductTicker;
