'use client';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import style from './navbar.module.css';
import { useState } from 'react';
import NavbarDrawer from './components/navbar-drawer/navbar-drawer';
import ExtraContent from './components/extra-content/extra-content';

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    function handleDrawer() {
        if (openDrawer) setOpenDrawer(false);
        else setOpenDrawer(true);
    }

    return (
        <Menu mode="horizontal" className={style.wrapper} expandIcon>
            <div key={'logo'} className={style.logoWrapper}>
                <div className={style.logo} />
            </div>

            <Menu.Item>Criptomoedas</Menu.Item>
            <Menu.Item>Sobre</Menu.Item>

            <div className={style.extraContentWrapper}>
                <ExtraContent />
            </div>

            <div onClick={handleDrawer} className={style.drawerToggle}>
                <MenuOutlined />
            </div>
            <NavbarDrawer open={openDrawer} onClose={handleDrawer} />
        </Menu>
    );
};

export default Navbar;
