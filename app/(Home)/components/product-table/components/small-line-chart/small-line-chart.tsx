'use client';
import React, { useMemo } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { chartDataType } from '../../../../../context/data-context/api/get-chart-data/get-chart-data';
import { theme } from 'antd';

interface SmallLineChartProps {
    chartData: chartDataType['']['candles'];
}

const SmallLineChart = ({ chartData }: SmallLineChartProps) => {
    const { token } = theme.useToken();

    const getStrokeColor = useMemo(() => {
        const firstData = chartData[0];
        const lastData = chartData.at(-1);

        if (!lastData) return '#8884d8';

        if (Number(lastData.open) < Number(firstData.open)) {
            return token.colorError;
        }

        return token.colorSuccess;
    }, [chartData, token]);

    return (
        <>
            <ResponsiveContainer width="100%" height={50}>
                <LineChart width={250} height={50} data={chartData}>
                    <YAxis domain={['dataMin', 'dataMax']} hide />
                    <Line type="monotone" dataKey="open" stroke={getStrokeColor} dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default SmallLineChart;
