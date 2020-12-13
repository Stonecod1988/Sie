import React, {useState} from 'react'
import {Breadcrumb, Layout, Menu} from 'antd';
import axios from 'axios'

const {Header, Content, Footer} = Layout;

const useList = (() => {
    const [listThema, setThematique] = useState([]);
    axios.get('http://localhost:8000/api/')
        .then(response => setThematique(listThema => listThema = response.data));

    return [
        listThema,
        setThematique
    ]
});


const CustomLayout = (props) => {
    const [listThema, setThematique] = useList('');
    const items = listThema.map(item => <li key={item.id}>{item.name}</li>);
    return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                    <ul>
                        {listThema && items}
                    </ul>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )

};

export default CustomLayout

