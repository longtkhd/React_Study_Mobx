import React from 'react'
import PropTypes from 'prop-types'
import { BarsOutlined, DownOutlined } from '@ant-design/icons'
import { Dropdown, Button, Menu } from 'antd'
import ModalCreate from '../ModalCreate'

const DropOption = ({
    onMenuClick,
    menuOptions = [],
    buttonStyle,
    dropdownProps,
}) => {
    const menu = menuOptions.map(item => (
        <Menu.Item key={item.key}>{item.name}</Menu.Item>
    ))
    return (
        <Dropdown
            overlay={<Menu onClick={onMenuClick}>{menu}</Menu>}
            {...dropdownProps}
        >
            <Button style={{ border: 'none', ...buttonStyle }}>
                <BarsOutlined style={{ marginRight: 2 }} />
                <DownOutlined />
            </Button>
        </Dropdown>
    )
}



export default DropOption