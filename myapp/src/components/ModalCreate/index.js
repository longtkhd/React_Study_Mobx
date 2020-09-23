import { set } from 'mobx';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Select, DatePicker, Switch, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment'

import { observer, inject } from 'mobx-react'


const ModalCreate = ({ MemberStore, ...props }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [studentCode, setStudenCode] = useState('');
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');


    useEffect(() => {


        if (props.isEdit) {

            const d = props.EditData.dob;
            setFullName(props.EditData.fullName);
            setEmail(props.EditData.email);
            setPhone(props.EditData.phone);
            setAddress(props.EditData.address);
            setStudenCode(props.EditData.studentCode);
            setGender(props.EditData.gender);
            setDob(moment(d));
            setRole(props.EditData.role)




        }

    }, [])



    const [ModalText, setModalText] = useState('')
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };


    const showModal = () => {
        console.log(props.isEdit)
        console.log(props.EditData)

        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true)
        const data = {
            fullName: fullName,
            email: email,
            phone: phone,
            address: address,
            studentCode: studentCode,
            role: role,
            gender: gender,
            dob: dob
        }
        const dataEdit = {
            _id: props.EditData._id,
            fullName: fullName,
            email: email,
            phone: phone,
            address: address,
            studentCode: studentCode,
            role: role,
            gender: gender,
            dob: dob
        }


        { props.isEdit ? MemberStore.UpdateUser(dataEdit) : MemberStore.CreateUser(data) }

        // MemberStore.CreateUser(data);

        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false)
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };


    return (
        <div>
            <Button type="ghost" onClick={showModal} >
                {props.isEdit ? 'Edit' : 'Create'}
            </Button>
            <Modal
                title="New User"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="FullName">
                        <Input onChange={e => setFullName(e.target.value)} value={fullName} />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input onChange={e => setEmail(e.target.value)} value={email} />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input onChange={e => setPhone(e.target.value)} value={phone} />
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input onChange={e => setAddress(e.target.value)} value={address} />
                    </Form.Item>
                    <Form.Item label="studentCode">
                        <Input onChange={e => setStudenCode(e.target.value)} value={studentCode} />
                    </Form.Item>
                    <Form.Item label="Role">
                        <Select onChange={e => setRole(e)} value={role} >

                            <Select.Option value="5f65abd9ad8cdf07d008418b">Admin</Select.Option>
                            <Select.Option value="5f65abd9ad8cdf07d008418c">User</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Gender" >
                        <Select onChange={e => setGender(e)} value={gender}>
                            <Select.Option value="male">Nam</Select.Option>
                            <Select.Option value="female">Nữ</Select.Option>
                        </Select>
                    </Form.Item>


                    <Form.Item label="DatePicker">
                        <DatePicker
                            value={dob}
                            onChange={e => setDob(e)}
                            format="YYYY/MM/DD"

                        />
                    </Form.Item>

                    <Form.Item label="IsActive">
                        <Switch />
                    </Form.Item>

                    <Form.Item
                        name="Avatar"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>


                </Form>
            </Modal>

        </div>
    );
};




export default inject('MemberStore')(observer(ModalCreate));

