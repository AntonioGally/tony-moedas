import React from 'react';
import style from './information-sider.module.css';
import SiderHeader from './components/sider-header/sider-header';

const InformationSider = () => {
    return (
        <div className={style.wrapper}>
            <SiderHeader />
        </div>
    );
};

export default InformationSider;
