import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash'; // Importando lodash para usar a função debounce
import { tickerType, statusType } from '../../types/data-context.types';

function initializeWebSockets(productList: statusType['products'], handleMessage: (event: MessageEvent) => void) {
    const tickerWebSocket = new WebSocket('wss://ws-feed.exchange.coinbase.com');

    tickerWebSocket.onopen = () => {
        tickerWebSocket!.send(
            JSON.stringify({
                type: 'subscribe',
                product_ids: productList.map((product) => product.id),
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
}

function useTickerWebSocket(productList: statusType['products']) {
    const [ticker, setTicker] = useState<tickerType[]>([]);

    // Debounced function to update the state with a delay
    const updateTicker = useMemo(
        () =>
            debounce((tempTickObject: { [key: string]: tickerType }) => {
                const sortedArray = Object.values(tempTickObject).sort(
                    (a, b) => parseFloat(b.price) - parseFloat(a.price),
                );
                setTicker(sortedArray);
            }, 500),
        [],
    ); // Update state every 500ms

    useEffect(() => {
        const tempTickObject: { [key: string]: tickerType } = {};

        const handleMessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data) as tickerType;
            if (message.type === 'ticker' && message.product_id) {
                tempTickObject[message.product_id] = message;
                console.log('Updating in ws ');
                updateTicker(tempTickObject);
            }
        };

        const cleanupWebSockets = initializeWebSockets(productList, handleMessage);

        return () => {
            cleanupWebSockets();
        };
    }, [productList, updateTicker]);

    return { ticker };
}

export default useTickerWebSocket;
