'use client';
import React, { memo, useContext, useEffect, useRef } from 'react';
import { Content } from 'antd/es/layout/layout';
import style from './trading-view-chart.module.css';
import { productDetailsContext } from '../../context/product-details.context';

const TradingViewChart = () => {
    const { productInfo } = useContext(productDetailsContext);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isExistent = document.getElementById('trading-view-chart-script');

        if (containerRef.current && !isExistent) {
            const script = document.createElement('script');
            script.id = 'trading-view-chart-script';
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
            script.type = 'text/javascript';
            script.async = true;
            script.innerHTML = `
                {
                  "autosize": true,
                  "symbol": "BINANCE:${productInfo.base_display_symbol}USDT",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "dark",
                  "style": "1",
                  "locale": "en",
                  "backgroundColor": "#141414",
                  "hide_side_toolbar": false,
                  "allow_symbol_change": false,
                  "calendar": false,
                  "support_host": "https://www.tradingview.com"
                }`;

            containerRef.current.appendChild(script);
        }
    }, [productInfo.base_display_symbol]);

    return (
        <Content>
            <div className={`tradingview-widget-container ${style.wrapper}`} ref={containerRef}>
                <div
                    className="tradingview-widget-container__widget"
                    style={{ height: 'calc(100% - 32px)', width: '100%' }}
                ></div>
            </div>
        </Content>
    );
};

export default memo(TradingViewChart);
