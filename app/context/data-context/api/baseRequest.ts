const baseRequest = (url: string) => {
    return fetch(url, {
        headers: [['x-cg-pro-api-key', process.env.COIN_GECKO_API || '']],
    });
};

export default baseRequest;
