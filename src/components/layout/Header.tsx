import React, { useState } from 'react';
import { Layout, Typography, Drawer, Menu } from 'antd';
import './Header.scss';
import { MenuOutlined } from '@ant-design/icons';

export default function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const isDesktop = window.innerWidth > 768;

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Layout.Header className="header">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {isDesktop ?
                (<div className="header-content" id="for-laptop">
                 <div className="header-links">
                    <Typography.Link className="header-link" onClick={() => handleClick("about-competition")}>
                        Про конкурс
                    </Typography.Link>
                    <Typography.Link className="header-link" onClick={() => handleClick("for-teachers")}>
                        Учительству
                    </Typography.Link>
                    <Typography.Link className="header-link" onClick={() => handleClick("for-students")}>
                        Учнівству
                    </Typography.Link>
                    <Typography.Link className="header-link" onClick={() => handleClick("map")}>
                        Карта інноваторів/ок
                    </Typography.Link>
                </div>
            </div>) : (
            <div id="for-mobile">
                <div className="menu-icon" onClick={() => setIsMenuVisible(true)}>
                    <MenuOutlined />
                </div>
                <Drawer
                    className="menu"
                    placement="right"
                    closable={false}
                    onClose={() => setIsMenuVisible(false)}
                    visible={isMenuVisible}
                    style={{ backgroundColor: '#F2FCBE' }}
                >
                    <Menu className="menu">
                        <Menu.Item onClick={() => handleClick("about-competition")}>
                            Про конкурс
                        </Menu.Item>
                        <Menu.Item onClick={() => handleClick("for-teachers")}>
                            Учительству
                        </Menu.Item>
                        <Menu.Item onClick={() => handleClick("for-students")}>
                            Учнівству
                        </Menu.Item>
                        <Menu.Item onClick={() => handleClick("map")}>
                            Карта інноваторів/ок
                        </Menu.Item>
                        <Menu.Item>
                            <a href="tel:+380955871367" className="last-item">+380955871367</a>
                        </Menu.Item>
                    </Menu>
                </Drawer>
            </div>)}
        </Layout.Header>
    );
}
