import React from 'react';
import { Avatar, Menu, Spin } from 'antd';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

const AvatarDropdown = () => {
    return (
        <div>
            <Menu selectedKeys={[]} >
                {(
                    <Menu.Item key="center">
                        <UserOutlined />
            个人中心
                    </Menu.Item>
                )}
                {(
                    <Menu.Item key="settings">
                        <SettingOutlined />
            个人设置
                    </Menu.Item>
                )}
                {<Menu.Divider />}

                <Menu.Item key="logout">
                    <LogoutOutlined />
          退出登录
        </Menu.Item>
            </Menu>

        </div>
    );
}

export default AvatarDropdown;
