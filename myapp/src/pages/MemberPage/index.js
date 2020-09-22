import React, { useEffect } from 'react';
import { Table, Tag, Space, Button, Row, Col, Form } from 'antd'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx';
import HeaderTable from '../../components/HeaderTable'



const Member = ({ MemberStore }) => {

    useEffect(() => {
        MemberStore.getAllUser();






    }, [MemberStore]);








    const columns = [
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'studenCode',
            dataIndex: 'studentCode',
            key: 'studentCode',
        },
        {
            title: 'isActive',
            key: 'isActive',
            // dataIndex: 'schoolYear',
            render: (text, data) => (
                <Space size="middle">
                    <a>{data.isActive.toString()} </a>
                    {/* <a>Delete</a> */}
                </Space>
            ),



        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Profile </a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];



    const data = toJS(MemberStore.users);

    return (
        <div className="Table">
            <HeaderTable />
            < Table columns={columns} dataSource={data} rowKey="_id" />


        </div >

    );
}

export default inject('MemberStore')(observer(Member));
