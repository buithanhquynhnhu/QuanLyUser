import React from "react";
import { Form, Input, Typography, Button, Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./login.css";


const Login = () => {
  const login = () => {
    message.success("Login successful!");
  };
  return (
    <div className="app__form">
      <Form className="login__form" onFinish={login}>
        <Typography.Title>Welcome Back !</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid email",
            },
          ]}
          label="Email"
          name={"myEmail"}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Enter your password",
            },
          ]}
          label="Password"
          name={"myPassword"}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        <div className="social__login">
          <GoogleOutlined
            className="social__icon"
            onClick={login}
            style={{ color: "red" }}
          />
          <FacebookOutlined
            className="social__icon"
            onClick={login}
            style={{ color: "blue" }}
          />
          <TwitterOutlined
            className="social__icon"
            onClick={login}
            style={{ color: "cyan" }}
          />
        </div>
      </Form>
    </div>
  );
};

export default Login;
