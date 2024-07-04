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
    const url = `https://api.coinbase.com/api/v3/brokerage/market/products/${productId}/candles?start=${startTime}&end=${endTime}&granularity=ONE_DAY`;

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

export async function loadCharts(productIds: string[]): Promise<chartDataType> {
    try {
        productIds.forEach(async (productId, index) => {
            if (index <= 15) {
                const data = await getChartData(productId);
                chartData[productId] = data;
            }
        });

        console.log({ chartData });
        return chartData;
    } catch (error) {
        throw new Error(String(error));
    }
}
