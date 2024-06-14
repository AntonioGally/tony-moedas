import React, { useContext, useMemo } from 'react';
import { dataContext } from '@/app/context/data-context/data-context';
import { productsType } from '@/app/context/data-context/types/products.type';
import { Skeleton } from 'antd';
import { ColumnsType } from 'antd/es/table';

const useGetColumns = () => {
    const { ticker } = useContext(dataContext);

    const getColumns = useMemo((): ColumnsType<productsType['products'][0]> => {
        const columns: ColumnsType<productsType['products'][0]> = [
            {
                dataIndex: 'key',
                render: (_, record, index) => index + 1,
                title: '#',
            },
            {
                dataIndex: 'base_name',
                title: 'Nome',
            },
            {
                dataIndex: 'price',
                title: 'Preço',
                render: (_, record) => {
                    const price = ticker?.[record.product_id]?.price;
                    if (price) return `$${price}`;
                    else return <Skeleton.Input size="small" />;
                },
            },
            {
                dataIndex: 'price_percentage_change_24h',
                title: '1h %',
                render: (value) => `${Number(value).toFixed(2)} %`,
            },
        ];

        return columns;
    }, [ticker]);

    return { getColumns };
};

export default useGetColumns;
