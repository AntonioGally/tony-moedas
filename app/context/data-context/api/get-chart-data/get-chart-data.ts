export type chartDataAPI = {
    candles: {
        start: string;
        low: string;
        high: string;
        open: string;
        close: string;
        volume: string;
    }[];
};

export type chartDataType = {
    [productId: string]: {
        candles: chartDataAPI['candles'];
    };
};

const chartData = {} as chartDataType;

export async function getChartData(productId: string) {
    // Get the current time in UNIX format
    const endTime = Math.floor(Date.now() / 1000);

    // Calculate the start time (7 days ago)
    const sevenDaysInSeconds = 7 * 24 * 60 * 60; // 7 days in seconds
    const startTime = endTime - sevenDaysInSeconds;

    // Format the URL with the calculated start and end times
    const url = `https://api.coinbase.com/api/v3/brokerage/market/products/${productId}/candles?start=${startTime}&end=${endTime}&granularity=TWO_HOUR`;

    return new Promise<chartDataAPI>((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch(reject);
    });
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export async function loadCharts(productIds: string[]): Promise<chartDataType> {
    const chunkedProductIds = chunkArray(productIds, 5);

    for (const chunk of chunkedProductIds) {
        const promises = chunk.map((productId) =>
            getChartData(productId)
                .then((data) => {
                    chartData[productId] = data;
                })
                .catch((error) => {
                    console.error(`Failed to fetch data for product ${productId}:`, error);
                }),
        );

        await Promise.all(promises);
    }

    return chartData;
}
