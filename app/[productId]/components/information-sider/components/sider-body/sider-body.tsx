import React, { useContext, useMemo } from 'react';
import style from './sider-body.module.css';
import { Flex, Skeleton, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import { productDetailsContext } from '@/app/[productId]/context/product-details.context';
import useNumberFormatter from '@/app/hooks/use-number-formatter/use-number-formatter';

const SiderBody = () => {
    const { productTicker, productInfo } = useContext(productDetailsContext);
    const { formatPrice } = useNumberFormatter();

    const getHighAndLow = useMemo(() => {
        const lowPrice = productTicker?.low_24h;
        const highPrice = productTicker?.high_24h;

        if (!lowPrice || !highPrice) return <Skeleton.Input size="small" />;

        return (
            <Flex gap={12}>
                <Typography.Text type="success">
                    <CaretUpFilled /> {formatPrice(highPrice)}
                </Typography.Text>
                <Typography.Text type="danger">
                    <CaretDownFilled /> {formatPrice(lowPrice)}
                </Typography.Text>
            </Flex>
        );
    }, [productTicker?.high_24h, productTicker?.low_24h, formatPrice]);

    const getLastTrade = useMemo(() => {
        const lastTradeSide = productTicker?.side;
        const lastTradeSize = productTicker?.last_size;

        if (!lastTradeSide || !lastTradeSize) return <Skeleton.Input size="small" />;
        if (lastTradeSide === 'buy') {
            return (
                <Flex gap={4}>
                    <Typography.Text style={{ textTransform: 'capitalize' }}>{`${lastTradeSide}, `}</Typography.Text>
                    <Typography.Text type="success">{`${lastTradeSize} ${productInfo.base_display_symbol}`}</Typography.Text>
                </Flex>
            );
        }
        return (
            <Flex gap={4}>
                <Typography.Text style={{ textTransform: 'capitalize' }}>{`${lastTradeSide}, `}</Typography.Text>
                <Typography.Text type="danger">{`${lastTradeSize} ${productInfo.base_display_symbol}`}</Typography.Text>
            </Flex>
        );
    }, [productInfo, productTicker?.side, productTicker?.last_size]);

    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <Typography.Title className={style.title} level={5}>
                    Variation volume (24h)
                </Typography.Title>
                {productTicker?.volume_24h ? (
                    <Typography.Text>{formatPrice(String(productTicker?.volume_24h))}</Typography.Text>
                ) : (
                    <Skeleton.Input size="small" />
                )}
            </div>
            <div className={style.item}>
                <Typography.Title className={style.title} level={5}>
                    High and Low (24h)
                </Typography.Title>
                {getHighAndLow}
            </div>
            <div className={style.item}>
                <Typography.Title className={style.title} level={5}>
                    Last trade
                </Typography.Title>
                {getLastTrade}
            </div>
        </div>
    );
};

export default SiderBody;
