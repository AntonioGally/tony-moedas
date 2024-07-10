'use client';

import React, { useContext } from 'react';
import { ConfigProvider, Table } from 'antd';
import useGetColumns from './hooks/use-get-columns/use-get-columns';
import { dataContext } from '@/app/context/data-context/data-context';
import style from './product-tabpe.module.css';

const ProductTable = () => {
    const { getColumns } = useGetColumns();
    const { products, ticker, chartData } = useContext(dataContext);

    return (
        <div className={style.wrapper}>
            <h1 onClick={() => console.log({ products, ticker, chartData })}>oi</h1>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            cellPaddingBlock: 18,
                            cellPaddingInline: 14,
                            headerBg: 'transparent',
                            headerSplitColor: 'transparent',
                        },
                    },
                }}
            >
                <Table
                    dataSource={products.products}
                    columns={getColumns}
                    pagination={false}
                    scroll={{ x: 1440 }}
                    rowKey={'key'}
                />
            </ConfigProvider>
        </div>
    );
};

export default ProductTable;
