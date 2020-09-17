import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { observer } from 'mobx-react'
import { useStores } from '../../hooks/loginStore'
import { useHistory } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 7 },


};
const tailLayout = {
    wrapperCol: { offset: 9, span: 10 },
};





const Login = observer((props) => {
    const history = useHistory();


    const { loginStore } = useStores();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')




    useEffect(() => {
        const isAuth = localStorage.getItem('isAuthenticated');
        console.log(isAuth)



        if (isAuth) {

            history.push('/');
        }

    }, []);





    const onFinish = values => {
        console.log('Success:', values);
        loginStore.login(email, password).then(() => history.push('/'))
        // loginStore.login()
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const handleChangeEmail = e => {
        setEmail(e.target.value);

        // loginStore.setUsername(e.target.value);

    }
    const handleChangePassword = e => {
        setPassword(e.target.value)
        // loginStore.setPassword(e.target.value)

    }





    return (

        <div className='form'>
            <h2>Login</h2>

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}


            >
                <Form.Item
                    onChange={handleChangeEmail}
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



export default Login;