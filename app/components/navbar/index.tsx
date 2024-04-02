'use client';
import { Input, Menu } from 'antd';
import { GlobalOutlined, SunOutlined } from '@ant-design/icons';
import style from './navbar.module.css';

const Navbar = () => {
    return (
        <Menu mode="horizontal" className={style.wrapper}>
            <div key={'logo'} className={style.logoWrapper}>
                <div className={style.logo} />
            </div>

            <Menu.Item>Criptomoedas</Menu.Item>
            <Menu.Item>Sobre</Menu.Item>

            <div className={style.extraContent}>
                <Input.Search className={style.input} />
                <GlobalOutlined className={style.globalIcon} />
                <SunOutlined className={style.sunIcon} />
            </div>
        </Menu>
    );
};

export default Navbar;
