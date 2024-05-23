import { useEffect, useState } from 'react';
import { statusType } from '../../types/data-context.types';

const useStatusWebSocket = () => {
    const [products, setProducts] = useState<statusType['products']>([]);

    function filterProductList(products: statusType['products']) {
        return products.filter((product) => {
            // Verificar se o produto é em USD
            const isUSD = product.id.endsWith('-USD');

            // Verificar se o identificador do produto tem até três letras
            const idParts = product.id.split('-');
            const hasThreeLettersOrLess = idParts[0].length <= 3;

            const isValidStatus = product.status === 'online';

            return isUSD && hasThreeLettersOrLess && isValidStatus;
        });
    }

    useEffect(() => {
        const statusWebSocket = new WebSocket('wss://ws-feed.exchange.coinbase.com');

        statusWebSocket.onopen = () => {
            statusWebSocket.send(
                JSON.stringify({
                    type: 'subscribe',
                    channels: [{ name: 'status' }],
                }),
            );
        };

        statusWebSocket.onmessage = (event) => {
            const message = JSON.parse(event.data) as statusType;
            if (message.type === 'status') {
                setProducts(filterProductList(message.products));
            }
        };

        statusWebSocket.onerror = (event) => {
            console.error('WebSocket Error:', event);
        };

        statusWebSocket.onclose = () => {
            console.log('WebSocket Disconnected');
        };

        return () => {
            statusWebSocket.close();
        };
    }, []);

    return { products };
};

export default useStatusWebSocket;
