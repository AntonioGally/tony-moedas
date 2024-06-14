import { useEffect, useState } from 'react';
import { tickerType } from '../../types/ticker.type';
import { productsType } from '../../types/products.type';

function useTickerWebSocket(productList: productsType) {
    const [ticker, setTicker] = useState<{ [key: string]: tickerType }>();

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data) as tickerType;
            if (message.type === 'ticker' && message.product_id) {
                console.log('Updating in ws');
                setTicker((prev) => ({ ...prev, [message.product_id]: message }));
            }
        };

        const tickerWebSocket = new WebSocket('wss://ws-feed.exchange.coinbase.com');

        tickerWebSocket.onopen = () => {
            tickerWebSocket!.send(
                JSON.stringify({
                    type: 'subscribe',
                    product_ids: productList.products.map((product) => product.product_id),
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
    }, [productList]);

    return { ticker };
}

export default useTickerWebSocket;
