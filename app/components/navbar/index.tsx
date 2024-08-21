'use client';
import { Menu, Segmented } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import style from './navbar.module.css';
import { useState } from 'react';
import NavbarDrawer from './components/navbar-drawer/navbar-drawer';
import ExtraContent from './components/extra-content/extra-content';
import { useRouter } from 'next/navigation';
import useGlobalContext from '@/app/context/globalContext/useGlobalContext';

const Navbar = () => {
    const router = useRouter();
    const { productsSelector } = useGlobalContext();
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    function handleDrawer() {
        setOpenDrawer((prev) => !prev);
    }

    return (
        <>
            <Menu mode="horizontal" className={style.wrapper} expandIcon>
                <Menu.Item key={'home'} onClick={() => router.push('/')}>
                    Home
                </Menu.Item>

                {productsSelector && (
                    <div>
                        <Segmented
                            options={productsSelector.map((product) => ({
                                label: product.productName,
                                value: product.productId,
                            }))}
                            onChange={(value) => router.push(`/${value}`)}
                        />
                    </div>
                )}

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
