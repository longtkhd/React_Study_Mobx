import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
// import { AutoComplete, Input } from 'antd';

const HeaderSearch = () => {
    return (
        <div >
            <SearchOutlined
                key="Icon"
                style={{
                    cursor: 'pointer',
                    float: 'right'
                }}
            ></SearchOutlined>

        </div>
    );
}

export default HeaderSearch;
