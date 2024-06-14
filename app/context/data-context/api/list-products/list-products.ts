import { productsType } from '../../types/products.type';

export async function listProducts() {
    'use server';
    return new Promise<productsType>((resolve, reject) => {
        fetch('https://api.coinbase.com/api/v3/brokerage/market/products')
            .then(async (data) => {
                const response = (await data.json()) as productsType;
                resolve(sanitizeProducts(response));
            })
            .catch(reject);
    });
}

function sanitizeProducts(products: productsType): productsType {
    return {
        num_products: products.num_products,
        products: products.products.slice(0, 250).filter((product) => {
            // Verificar se o produto é em USD
            const isUSD = product.product_id.endsWith('-USD');

            // Verificar se o identificador do produto tem até três letras
            const idParts = product.product_id.split('-');
            const hasThreeLettersOrLess = idParts[0].length <= 3;

            const isValidStatus = product.status === 'online';

            return isUSD && hasThreeLettersOrLess && isValidStatus;
        }),
    };
}
