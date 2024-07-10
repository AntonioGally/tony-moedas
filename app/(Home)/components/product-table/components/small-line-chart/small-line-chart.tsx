'use client';
import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { chartDataType } from '../../../../../context/data-context/api/get-chart-data/get-chart-data';

interface SmallLineChartProps {
    chartData: chartDataType['']['candles'];
}

const SmallLineChart = ({ chartData }: SmallLineChartProps) => {
    return (
        <>
            <ResponsiveContainer width="100%" height={50}>
                <LineChart width={250} height={50} data={chartData}>
                    <YAxis domain={['dataMin', 'dataMax']} hide />
                    <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default SmallLineChart;
