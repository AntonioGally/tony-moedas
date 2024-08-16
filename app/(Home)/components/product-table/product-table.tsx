'use client';

import React, { useContext, useMemo } from 'react';
import { ConfigProvider, Table } from 'antd';
import useGetColumns from './hooks/use-get-columns/use-get-columns';
import { dataContext } from '@/app/context/data-context/data-context';
import style from './product-tabpe.module.css';
import HeaderButtons from './components/header-buttons/header-buttons';
import { productTableContext } from './product-table.context';
import { globalContext } from '@/app/context/globalContext/globalContext';

const ProductTable = () => {
    const { theme } = useContext(globalContext);
    const { products } = useContext(dataContext);
    const { selectedFilter, favoritedProducts } = useContext(productTableContext);

    const { getColumns } = useGetColumns();

    const getDataSource = useMemo(() => {
        if (selectedFilter === 'crypto') return products.products;
        return products.products.filter((product) => favoritedProducts.includes(product.product_id));
    }, [favoritedProducts, products.products, selectedFilter]);

    return (
        <div className={`${style.wrapper} ${theme === 'dark' ? style.dark : ''}`}>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            cellPaddingBlock: 14,
                            cellPaddingInline: 14,
                            headerSplitColor: 'transparent',
                        },
                    },
                }}
            >
                <div className={style.tableWrapper}>
                    <HeaderButtons />
                    <Table
                        dataSource={getDataSource}
                        columns={getColumns}
                        pagination={false}
                        scroll={{ x: 1440 }}
                        rowKey={'key'}
                    />
                </div>
            </ConfigProvider>
        </div>
    );
};

export default ProductTable;
