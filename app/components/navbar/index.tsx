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
        <>
            <Menu mode="horizontal" className={style.wrapper} expandIcon>
                <div key={'logo'} className={style.logoWrapper}>
                    <div className={style.logo} />
                </div>

                <Menu.Item key={'cripto'}>Criptomoedas</Menu.Item>
                <Menu.Item key={'about'}>Sobre</Menu.Item>

                <div key={'extra'} className={style.extraContentWrapper}>
                    <ExtraContent />
                </div>

                <div key={'drawerToggle'} onClick={handleDrawer} className={style.drawerToggle}>
                    <MenuOutlined />
                </div>
            </Menu>
            <NavbarDrawer open={openDrawer} onClose={handleDrawer} />
        </>
    );
};

export default Navbar;
