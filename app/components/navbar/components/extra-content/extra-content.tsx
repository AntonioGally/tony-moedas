import React from 'react';
import { Input } from 'antd';
import style from './extra-content.module.css';

const ExtraContent = () => {
    return (
        <div className={style.extraContent}>
            <Input.Search readOnly className={style.input} />
        </div>
    );
};
export default ExtraContent;
