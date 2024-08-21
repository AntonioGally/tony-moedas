'use client';

import React, { useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ConfigProvider, Table } from 'antd';
import useGetColumns from './hooks/use-get-columns/use-get-columns';
import { dataContext } from '@/app/context/data-context/data-context';
import style from './product-tabpe.module.css';
import HeaderButtons from './components/header-buttons/header-buttons';
import { productTableContext } from './product-table.context';
import useGlobalContext from '@/app/context/globalContext/useGlobalContext';

const ProductTable = () => {
    const router = useRouter();
    const { products } = useContext(dataContext);
    const { selectedFilter, favoritedProducts } = useContext(productTableContext);
    const { addProductToList } = useGlobalContext();

    const { getColumns } = useGetColumns();

    const getDataSource = useMemo(() => {
        if (selectedFilter === 'crypto') return products.products;
        return products.products.filter((product) => favoritedProducts.includes(product.product_id));
    }, [favoritedProducts, products.products, selectedFilter]);

    return (
        <div className={style.wrapper}>
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
                        onRow={(data) => ({
                            style: { cursor: 'pointer' },
                            onClick: () => {
                                addProductToList({
                                    productId: data.product_id,
                                    productName: `${data.base_name} - ${data.base_display_symbol}`,
                                });
                                router.push(`/${data.product_id}`);
                            },
                        })}
                    />
                </div>
            </ConfigProvider>
        </div>
    );
};

export default ProductTable;
