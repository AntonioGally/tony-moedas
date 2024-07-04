import React, { useContext, useMemo } from 'react';
import { dataContext } from '@/app/context/data-context/data-context';
import { productsType } from '@/app/context/data-context/types/products.type';
import { Flex, Skeleton, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import style from './columns.module.css';
import useNumberFormatter from '@/app/hooks/use-number-formatter/use-number-formatter';

const useGetColumns = () => {
    const { ticker } = useContext(dataContext);
    const { formatPrice } = useNumberFormatter();

    const getColumns = useMemo((): ColumnsType<productsType['products'][0]> => {
        const columns: ColumnsType<productsType['products'][0]> = [
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
                    const price = Number(value);
                    if (price < 0) {
                        return (
                            <Typography.Text type="danger">
                                <CaretDownFilled /> {(price * -1).toFixed(2)} %
                            </Typography.Text>
                        );
                    }
                    return (
                        <Typography.Text type="success">
                            <CaretUpFilled /> {price.toFixed(2)} %
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
                        <Flex dir="horizontal" gap={4} justify="flex-end">
                            <Typography.Text type="success" style={{ fontSize: 12 }}>
                                <CaretUpFilled /> {formatPrice(highPrice)}
                            </Typography.Text>
                            <Typography.Text type="danger" style={{ fontSize: 12 }}>
                                <CaretDownFilled /> {formatPrice(lowPrice)}
                            </Typography.Text>
                        </Flex>
                    );
                },
                width: '18%',
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
                width: '15%',
            },
            {
                dataIndex: 'test',
                title: 'test',
                width: '20%',
            },
        ];

        return columns;
    }, [ticker, formatPrice]);

    return { getColumns };
};

export default useGetColumns;
