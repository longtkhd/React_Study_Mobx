import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import useMergeValue from 'use-merge-value';
import styles from './index.less';
import React from 'react'


const HeaderSearch = (props) => {
    // const {
    //     className,
    //     defaultValue,
    //     onVisibleChange,
    //     placeholder,
    //     open,
    //     defaultOpen,
    //     ...restProps
    // } = props;


    return (

        <div>
            <Input.Search
                placeholder="search "
                onSearch={value => console.log(value)}
                style={{ width: 200, float: 'right' }}
            />
        </div >


    );
}

export default HeaderSearch;
