'use client';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import style from './navbar.module.css';
import { useContext, useState } from 'react';
import NavbarDrawer from './components/navbar-drawer/navbar-drawer';
import ExtraContent from './components/extra-content/extra-content';
import { globalContext } from '@/app/context/globalContext/globalContext';

const Navbar = () => {
    const { theme } = useContext(globalContext);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    function handleDrawer() {
        if (openDrawer) setOpenDrawer(false);
        else setOpenDrawer(true);
    }

    return (
        <>
            <Menu mode="horizontal" className={style.wrapper} expandIcon activeKey="crypto">
                <div key={'logo'} className={style.logoWrapper}>
                    <div className={`${style.logo} ${theme === 'dark' ? style.dark : ''}`} />
                </div>

                <Menu.Item key={'crypto'}>Cryptocurrencies</Menu.Item>
                {/* <Menu.Item key={'about'}>Sobre</Menu.Item> */}

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
