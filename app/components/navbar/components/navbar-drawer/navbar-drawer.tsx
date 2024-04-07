import React from 'react';
// Components
import { Drawer } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import ExtraContent from '../extra-content/extra-content';
// Css
import style from './navbar-drawer.module.css';

interface NavbarDrawerProps {
    open: boolean;
    onClose: () => void;
}

const NavbarDrawer = ({ open, onClose }: NavbarDrawerProps) => {
    return (
        <Drawer
            title={'Em Alta, Notícias e Tendências!'}
            onClose={onClose}
            open={open}
            closeIcon={<MenuFoldOutlined />}
        >
            <div className={style.wrapper}>
                <ExtraContent />
            </div>
        </Drawer>
    );
};
export default NavbarDrawer;
