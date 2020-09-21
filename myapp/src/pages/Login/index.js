import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState, useEffect } from 'react'
import './index.less'
import { observer, inject } from 'mobx-react'
// import { useStores } from '../../hooks/loginStore'
import { useHistory } from 'react-router-dom';

const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 8 },


};
const tailLayout = {
    wrapperCol: { offset: 8, span: 10 },
};





const Login = ({ LoginStore }) => {
    const history = useHistory();


    // const { loginStore } = useStores();
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
        LoginStore.login(email, password).then(() => history.push('/admin'))
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
                className="login-form"


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

                <Form.Item  {...tailLayout}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
        </a>
                </Form.Item>


                <Form.Item  {...tailLayout}>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: '40px' }}>
                        Log in
        </Button>
         Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>


    );
};



// export default Login;
export default inject('LoginStore')(observer(Login))
