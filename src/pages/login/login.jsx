import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//登录的路由组件

    const onFinish = values => {
        let result = 1;

        if(result == 0){
            message.success('')
        }else{
            message.error('登录信息有误')
        }
    };
    const onFinishFailed = values => {
        alert('输入有误')
    };

export default class Login extends Component {


    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt='logo'></img>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[ 
                            //声明式验证，直接使用别人定义好的验证规则进行验证
                            {
                                required: true,
                                whitespace:true,
                                message: 'Please input your Username!',
                            },
                            {
                                min:6,
                                message:'用户名至少六位'
                            },
                            {
                                max:10,
                                message:'用户名不超过10位'
                            },
                            {
                                pattern:/^[a-zA-Z0-9_]+$/,
                                message:'用户名必须是英文，数字或者下划线'
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}


