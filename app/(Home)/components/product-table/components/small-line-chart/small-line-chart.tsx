import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { chartDataAPI } from './utils/get-chart-data';

interface SmallLineChartProps {
    chartData: chartDataAPI;
}

const SmallLineChart = ({ chartData }: SmallLineChartProps) => {
    return (
        <>
            <ResponsiveContainer width="100%" height={50}>
                <LineChart width={250} height={50} data={chartData.candles}>
                    <Line type="monotone" dataKey="open" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default SmallLineChart;
