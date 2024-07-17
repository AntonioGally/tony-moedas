import { Input } from 'antd';
import React, { useContext } from 'react';
import style from './extra-content.module.css';
import { SunOutlined, SunFilled } from '@ant-design/icons';
import { globalContext } from '@/app/context/globalContext/globalContext';

const ExtraContent = () => {
    const { updateTheme, theme } = useContext(globalContext);

    const handleTheme = () => {
        if (theme === 'dark') {
            updateTheme('light');
            return;
        }

        updateTheme('dark');
    };

    return (
        <div className={style.extraContent}>
            <Input.Search readOnly className={style.input} />
            {theme === 'light' ? (
                <SunOutlined className={style.sunIcon} onClick={handleTheme} />
            ) : (
                <SunFilled className={style.sunIcon} onClick={handleTheme} />
            )}
        </div>
    );
};
export default ExtraContent;
