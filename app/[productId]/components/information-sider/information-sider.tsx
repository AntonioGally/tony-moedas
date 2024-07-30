import React from 'react';
import style from './information-sider.module.css';
import SiderHeader from './components/sider-header/sider-header';
import SiderPrice from './components/sider-price/sider-price';

const InformationSider = () => {
    return (
        <div className={style.wrapper}>
            <SiderHeader />
            <SiderPrice />
        </div>
    );
};

export default InformationSider;
