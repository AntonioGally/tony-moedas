'use client';
import React, { useContext } from 'react';
import style from './sider-header.module.css';
import { Typography } from 'antd';
import { productDetailsContext } from '@/app/[productId]/context/product-details.context';
import ProductStar from '@/app/(Home)/components/product-table/components/product-star/product-star';

const SiderHeader = () => {
    const { productInfo } = useContext(productDetailsContext);
    return (
        <div className={style.wrapper}>
            <Typography.Title level={3} className={style.title}>
                {productInfo.base_name}
                <Typography.Text className={style.subtitle}>{productInfo.base_currency_id}</Typography.Text>
            </Typography.Title>
            <Typography.Text>
                <ProductStar productId={productInfo.product_id} />
            </Typography.Text>
        </div>
    );
};

export default SiderHeader;
