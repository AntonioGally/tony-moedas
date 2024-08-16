'use client';

import React from 'react';
import Sider from 'antd/es/layout/Sider';
import SiderHeader from './components/sider-header/sider-header';
import SiderPrice from './components/sider-price/sider-price';
import style from './information-sider.module.css';
import SiderBody from './components/sider-body/sider-body';
import { Divider } from 'antd';

const InformationSider = () => {
    return (
        <Sider theme="light" breakpoint={'md'} width={310} className={style.wrapper}>
            <SiderHeader />
            <SiderPrice />
            <Divider />
            <SiderBody />
        </Sider>
    );
};

export default InformationSider;
