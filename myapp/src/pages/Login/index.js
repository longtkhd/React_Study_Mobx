import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react'
import styles from './style.less'
import { observer, inject } from 'mobx-react'
import { useStores } from '../../hooks/loginStore'

const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 7 },


};
const tailLayout = {
    wrapperCol: { offset: 9, span: 16 },
};




const Demo = observer(() => {
    const { loginStore } = useStores();












    const onFinish = values => {
        console.log('Success:', values);
        loginStore.login()
        // loginStore.login()
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const handleChangeEmail = e => {
        // console.log(loginStore.loading)
        loginStore.setUsername(e.target.value);
        // console.log(e.target.value)
    }
    const handleChangePassword = e => {
        loginStore.setPassword(e.target.value)

    }



    return (
        <div className="formW">
            <h2>Login</h2>

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onChange={handleChangeEmail}

            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    onChange={handleChangePassword}
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>

    );
});



export default Demo;