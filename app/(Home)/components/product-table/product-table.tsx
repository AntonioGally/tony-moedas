'use client';
import React, { useContext } from 'react';
import { Table } from 'antd';
import useGetColumns from './hooks/use-get-columns/use-get-columns';
import { dataContext } from '@/app/context/data-context/data-context';

const ProductTable = () => {
    const { getColumns } = useGetColumns();
    const { products, ticker } = useContext(dataContext);
    return (
        <>
            <h1 onClick={() => console.log({ products, ticker })}>oi</h1>
            <Table dataSource={products.products} columns={getColumns} pagination={false} />
        </>
    );
};

export default ProductTable;
