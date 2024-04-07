import { Input } from 'antd';
import React from 'react';
import style from './extra-content.module.css';
import { GlobalOutlined, SunOutlined } from '@ant-design/icons';

const ExtraContent = () => {
    return (
        <div className={style.extraContent}>
            <Input.Search className={style.input} />
            <GlobalOutlined className={style.globalIcon} />
            <SunOutlined className={style.sunIcon} />
        </div>
    );
};
export default ExtraContent;
