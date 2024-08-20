'use client';
import { Menu, Segmented } from 'antd';
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
            <Menu mode="horizontal" className={style.wrapper} expandIcon>
                <Menu.Item key={'home'}>Home</Menu.Item>

                <div>
                    <Segmented options={['Bitcoin - BTC', 'Etherium - ETH']} />
                </div>

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
