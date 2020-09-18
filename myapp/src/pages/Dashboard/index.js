import React, { Fragment, useEffect } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './style.less'
import { inject, observer } from 'mobx-react'
import HeaderSearch from '../../components/HeaderSearch'
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout

const Dashboard = ({ children, LoginStore }) => {
    const history = useHistory();


    const handleClickMenu = e => {
        e.key === 'SignOut' && LoginStore.logout();
        history.push('/login')
    }
    const rightContent = [
        <Menu mode="horizontal" key='user' onClick={handleClickMenu} className="Account">
            <SubMenu className="submenu"
                title={
                    <Fragment>
                        <span style={{ color: 'red', marginRight: 4 }}>
                            Hi,
                        </span>
                        <span style={{ color: 'white' }}> Long</span>

                        <Avatar style={{ marginLeft: 8 }} src={Logo} />
                    </Fragment>
                }
            >
                <Menu.Item key="SignOut">
                    <span style={{ color: 'red' }}>Sign out</span>
                </Menu.Item>
            </SubMenu>
        </Menu>,
    ]

    return (
        <Layout>
            <Header className="header">
                <img className="logo" src={Logo} height='50px' />
                <div style={{ float: 'right' }} className="userLogout">{rightContent}</div>





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
                            <Link to='/admin/member'></Link>
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
                        <HeaderSearch />
                        {/* <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}

                        {/* <AvatarDropdown /> */}




                    </div>

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: '30px 0',
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout >
    );
}


export default inject('LoginStore')(observer(Dashboard))


