export type coinListType = {
    name: string;
    slug: string;
    id: string;
    numericId: number;
    image: string;
}[];
// 1,1027,825,1839,5426,3408,52,11419,74,2010,5805,5994,1958,1831,6636,1975,3890,2,8916,6535,3957,4943,7083,26081,21794,22974,4847,1321,27075,3635,3794,2280,5690,3897,512,11841,10603,3077,28752,4642,1518,20396,7226,6719,11840,24478,328,2416,3513,8000,22861,3773,5632,4157,11092,30171,20947,9481,23149,4030,29210,10804,4558,28298,3602,7080,7950,7278,16086,1376,23254,3155,29587,21159,2424,10791,6892,22691,4948,23095,6783,2011,14101,6210,28324,25028,7334,2586,8425,4066,13502,28177,7431,1659,2087,1765,8646,1966,23711,1720,9023,9022,5824
export const coinList = [
    {
        name: 'Bitcoin',
        slug: 'bitcoin',
        id: 'BTC-USD',
        numericId: 1,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    },
    {
        name: 'Ethereum',
        slug: 'ethereum',
        id: 'ETH-USD',
        numericId: 1027,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    },
    {
        name: 'Tether',
        slug: 'tether',
        id: 'USDT-USD',
        numericId: 825,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    },
    {
        name: 'Solana',
        slug: 'solana',
        id: 'SOL-BTC',
        numericId: 5426,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
    },
    {
        name: 'Dodgecoin',
        slug: 'dodgecoin',
        id: 'DOGE-USD',
        numericId: 74,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
    },
    {
        name: 'Cardano',
        slug: 'cardano',
        id: 'ADA-USD',
        numericId: 2010,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
    },
];
