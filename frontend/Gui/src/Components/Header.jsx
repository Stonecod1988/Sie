import React from 'react'
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom"
import Lang from './Lang'
import {useTranslation} from "react-i18next";

const {Header} = Layout;

const CustomHeader = () => {
    const {t} = useTranslation();

    return (
        <Header style={{position: 'absolute', zIndex: 1, top: "0", width: '100%', marginBottom: '25px'}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="0">
                    <Lang/>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="/">{t('header.translated-menu-text1')}</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/thematique">{t('header.translated-menu-text2')}</Link></Menu.Item>
                <Menu.Item key="3">
                    <Link to="/indicateur">{t('header.translated-menu-text3')}</Link></Menu.Item>
                <Menu.Item key="4">
                    <Link to="/contact">{t('header.translated-menu-text4')}</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/machine">TestMachine</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
};

export default CustomHeader