import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './style.less'
import { inject, observer } from 'mobx-react'
import HeaderSearch from '../../components/HeaderSearch'
import AvatarDropdown from '../../components/AvatarDropdown'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout

const Dashboard = ({ children, LoginStore }) => {
    console.log(LoginStore)
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="logo" />

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <img src={Logo} alt="Logo" style={{ height: '50px' }} />
                    <Menu.Item key="3" style={{ float: 'right' }}>Home1</Menu.Item>


                </Menu>






            </Header>
            <Layout>
                <Sider width={180} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Dashboard">
                            <Menu.Item key="1">Alalyst
                            <Link to='/admin/option1'></Link>
                            </Menu.Item>
                            <Menu.Item key="2">Moniter
                            <Link to='/admin/option2'></Link>
                            </Menu.Item>
                            <Menu.Item key="3">Workspace</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>

                    <div style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}

                        <HeaderSearch

                            placeholder="站内搜索"
                            defaultValue="umi ui" />
                        {/* <AvatarDropdown /> */}


                    </div>

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}



export default inject('LoginStore')(observer(Dashboard))
