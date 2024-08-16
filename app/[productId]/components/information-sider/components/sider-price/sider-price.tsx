'use client';
import React, { useContext } from 'react';
import { productDetailsContext } from '@/app/[productId]/context/product-details.context';
import style from './sider-price.module.css';
import { Skeleton, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import useNumberFormatter from '@/app/hooks/use-number-formatter/use-number-formatter';

const SiderPrice = () => {
    const { productTicker, productInfo } = useContext(productDetailsContext);
    const { formatPrice } = useNumberFormatter();

    function formatPercentage(value: string) {
        const percentage = Number(value);
        if (percentage < 0) {
            return (
                <Typography.Text type="danger">
                    <CaretDownFilled /> {(percentage * -1).toFixed(2)} % (1d)
                </Typography.Text>
            );
        }
        return (
            <Typography.Text type="success">
                <CaretUpFilled /> {percentage.toFixed(2)} % (1d)
            </Typography.Text>
        );
    }

    return (
        <div className={style.wrapper}>
            {productTicker?.price ? (
                <Typography.Title className={style.title} level={2}>
                    {formatPrice(productTicker.price)}
                </Typography.Title>
            ) : (
                <Skeleton.Input size="default" />
            )}
            {formatPercentage(productInfo.price_percentage_change_24h)}
        </div>
    );
};

export default SiderPrice;
