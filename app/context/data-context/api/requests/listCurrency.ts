export async function listCurrency() {
    'use server';

    return new Promise((resolve, reject) => {
        fetch('https://api.exchange.coinbase.com/currencies')
            .then(async (data) => {
                const response = await data.json();
                resolve(response);
            })
            .catch(reject);
    });
}
