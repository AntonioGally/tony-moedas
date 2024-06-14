'use client';
import React, { useContext } from 'react';
import { Table } from 'antd';
import useGetColumns from './hooks/use-get-columns/use-get-columns';
import { dataContext } from '@/app/context/data-context/data-context';

const ProductTable = () => {
    const { getColumns } = useGetColumns();
    const { products } = useContext(dataContext);
    return <Table dataSource={products.products} columns={getColumns} />;
};

export default ProductTable;
