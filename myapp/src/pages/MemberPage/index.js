import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button, Row, Col, Form, Modal } from 'antd'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx';
import HeaderTable from '../../components/HeaderTable'
import DropOption from '../../components/DropOption'
import ModalCreate from '../../components/ModalCreate'
const { confirm } = Modal





const Member = ({ MemberStore, ...props }) => {
    // const [isEdit, setIsEdit] = useState('')
    const handleMenuClick = (record, e) => {
        // const { onDeleteItem, onEditItem, i18n } = this.props

        // if (e.key === '1') {
        //     setIsEdit(true)
        //     // setEditData(record);


        //     //   onEditItem(record)
        //     console.log(record)
        // } else
        if (e.key === '2') {
            confirm({
                title: `Are you sure delete this record?`,
                onOk() {
                    // onDeleteItem(record.id)
                    MemberStore.DeleteUser(record);
                },
            })
        }
    }
    const data = toJS(MemberStore.users);


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
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (text, record) => (
        //         <Space size="middle">
        //             <a>Profile </a>
        //             <a>Delete</a>
        //             <ModalCreate isEdit={true} EditData={data} />
        //         </Space>
        //     ),
        // },
        {
            title: <span>Action</span>,
            key: 'operation',
            fixed: 'right',
            render: (text, record) => {
                return (
                    <DropOption
                        onMenuClick={e => handleMenuClick(record, e)}
                        menuOptions={[
                            { key: '1', name: <ModalCreate EditData={record} isEdit={true} /> },
                            {
                                key: '2', name: <Button type="danger"  >
                                    Delete
                        </Button>
                            },
                        ]
                        }
                    />
                )
            },
        },
    ];





    return (
        <div className="Table">
            <HeaderTable />
            < Table columns={columns} dataSource={data} rowKey={record => record._id} />


        </div >

    );
}

export default inject('MemberStore')(observer(Member));
