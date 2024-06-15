import React, { useContext, useMemo } from 'react';
import { dataContext } from '@/app/context/data-context/data-context';
import { productsType } from '@/app/context/data-context/types/products.type';
import { Flex, Skeleton, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

const useGetColumns = () => {
    const { ticker } = useContext(dataContext);

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
                width: '20%',
            },
            {
                dataIndex: 'price',
                title: 'Price',
                align: 'end',
                render: (_, record) => {
                    const price = ticker?.[record.product_id]?.price;
                    if (price) return `$ ${price}`;
                    return <Skeleton.Input size="small" />;
                },
                width: '10%',
            },
            {
                dataIndex: 'price_percentage_change_24h',
                title: '24h %',
                align: 'end',
                render: (value, record) => {
                    const openPrice = ticker?.[record.product_id]?.open_24h;
                    if (openPrice) return `${Number(value).toFixed(2)} %`;
                    return <Skeleton.Input size="small" />;
                },
                width: '10%',
            },
            {
                dataIndex: 'price_24_high',
                title: '24h High',
                align: 'end',
                render: (_, record) => {
                    const highPrice = ticker?.[record.product_id]?.high_24h;
                    if (highPrice) return `$ ${highPrice}`;

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
                            <Tag color="success">{`$ ${highPrice}`}</Tag>
                            <Tag color="error">{`$ ${lowPrice}`}</Tag>
                        </Flex>
                    );
                },
                width: '15%',
            },
            {
                dataIndex: 'last_trade',
                title: 'Last trade',
                align: 'start',
                render: (_, record) => {
                    const lastTradeSide = ticker?.[record.product_id].side;
                    const lastTradeSize = ticker?.[record.product_id].last_size;

                    if (!lastTradeSide || !lastTradeSize) return <Skeleton.Input size="small" />;
                    return `${lastTradeSide}, ${lastTradeSize} ${record.base_display_symbol}`;
                },
                width: '15%',
            },
            {
                dataIndex: 'test',
                title: 'test',
                width: '18%',
            },
        ];

        return columns;
    }, [ticker]);

    return { getColumns };
};

export default useGetColumns;
