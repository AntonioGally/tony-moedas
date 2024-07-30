import React, { useContext, useMemo } from 'react';
import { dataContext } from '@/app/context/data-context/data-context';
import { productsType } from '@/app/context/data-context/types/products.type';
import { Flex, Skeleton, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import style from './columns.module.css';
import useNumberFormatter from '@/app/hooks/use-number-formatter/use-number-formatter';
import SmallLineChart from '../../components/small-line-chart/small-line-chart';
import ProductStar from '../../components/product-star/product-star';

const useGetColumns = () => {
    const { ticker, chartData } = useContext(dataContext);
    const { formatPrice } = useNumberFormatter();

    const getColumns = useMemo((): ColumnsType<productsType['products'][0]> => {
        const columns: ColumnsType<productsType['products'][0]> = [
            {
                dataIndex: 'watchlist',
                render: (_, record) => <ProductStar productId={record.product_id} />,
                title: '',
                align: 'center',
                width: '4%',
            },
            {
                dataIndex: 'key',
                render: (_, record, index) => index + 1,
                title: '#',
                align: 'end',
                width: '2%',
            },
            {
                dataIndex: 'base_name',
                title: 'Name',
                align: 'start',
                width: '15%',
                render: (value, record) => (
                    <Flex dir="horizontal">
                        <Typography.Text className={style.baseNameTitle}>{value}</Typography.Text>
                        <Typography.Text className={style.baseDisplaySymbol}>
                            {record.base_display_symbol}
                        </Typography.Text>
                    </Flex>
                ),
            },
            {
                dataIndex: 'price',
                title: 'Price',
                align: 'end',
                render: (_, record) => {
                    const price = ticker?.[record.product_id]?.price;
                    if (price) return formatPrice(price);
                    return <Skeleton.Input size="small" />;
                },
                width: '10%',
            },
            {
                dataIndex: 'price_percentage_change_24h',
                title: '24h %',
                align: 'end',
                render: (value) => {
                    const percentage = Number(value);
                    if (percentage < 0) {
                        return (
                            <Typography.Text type="danger">
                                <CaretDownFilled /> {(percentage * -1).toFixed(2)} %
                            </Typography.Text>
                        );
                    }
                    return (
                        <Typography.Text type="success">
                            <CaretUpFilled /> {percentage.toFixed(2)} %
                        </Typography.Text>
                    );
                },
                width: '10%',
            },
            {
                dataIndex: 'price_24_high',
                title: '24h High',
                align: 'end',
                render: (_, record) => {
                    const highPrice = ticker?.[record.product_id]?.high_24h;
                    if (highPrice) return formatPrice(highPrice);

                    return <Skeleton.Input size="small" />;
                },
                width: '10%',
            },
            {
                dataIndex: 'high_and_low',
                title: '24h High and Low',
                align: 'end',
                render: (_, record) => {
                    const lowPrice = ticker?.[record.product_id]?.low_24h;
                    const highPrice = ticker?.[record.product_id]?.high_24h;

                    if (!lowPrice || !highPrice) return <Skeleton.Input size="small" />;

                    return (
                        <Flex vertical gap={4}>
                            <Typography.Text type="success">
                                <CaretUpFilled /> {formatPrice(highPrice)}
                            </Typography.Text>
                            <Typography.Text type="danger">
                                <CaretDownFilled /> {formatPrice(lowPrice)}
                            </Typography.Text>
                        </Flex>
                    );
                },
                width: '11%',
            },
            {
                dataIndex: 'last_trade',
                title: 'Last trade',
                align: 'start',
                render: (_, record) => {
                    const lastTradeSide = ticker?.[record.product_id]?.side;
                    const lastTradeSize = ticker?.[record.product_id]?.last_size;

                    if (!lastTradeSide || !lastTradeSize) return <Skeleton.Input size="small" />;
                    if (lastTradeSide === 'buy') {
                        return (
                            <>
                                <Typography.Text
                                    style={{ textTransform: 'capitalize' }}
                                >{`${lastTradeSide}, `}</Typography.Text>
                                <Typography.Text type="success">{`${lastTradeSize} ${record.base_display_symbol}`}</Typography.Text>
                            </>
                        );
                    }
                    return (
                        <>
                            <Typography.Text
                                style={{ textTransform: 'capitalize' }}
                            >{`${lastTradeSide}, `}</Typography.Text>
                            <Typography.Text type="danger">{`${lastTradeSize} ${record.base_display_symbol}`}</Typography.Text>
                        </>
                    );
                },
                width: '14%',
            },
            {
                dataIndex: 'last_seven_days',
                title: 'Last 7 days',
                align: 'left',
                render: (_, record) => {
                    if (!chartData[record.product_id]?.candles) return <Skeleton.Input size="small" />;
                    return <SmallLineChart chartData={chartData[record.product_id].candles.slice().reverse()} />;
                },
                width: '23%',
            },
        ];

        return columns;
    }, [ticker, formatPrice, chartData]);

    return { getColumns };
};

export default useGetColumns;
