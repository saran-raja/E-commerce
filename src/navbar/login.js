import React, { useContext, useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";
import axios from "axios";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
function Login() {
  const { loginData, setLoginData, loginProfile, setLoginProfile } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [userError, setUserError] = useState(false);

  const onFinish = (values) => {
    {
      //   loginData.map((user) => {
      for (const user of loginData)
        if (
          values.username === user.username &&
          values.password === user.password
        ) {
          setLoginProfile(user);
          console.log(user);
          navigate("/");
          break;
        } else {
          setUserError(true);
          console.log("NOT MATCHED");
        }
      //   });
    }
  };
  useEffect(() => {
    userData();
  }, []);

  const userData = () => {
    let url = "http://localhost:3001/login";
    axios
      .get(url)
      .then((response) => {
        setLoginData(response.data);
        // console.log(response);
      })
      .catch(() => {});
  };

  return (
    <div className="login-container">
      <div className="form-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
            {userError && <p>Incorrect Username & Password</p>}
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <br />
            <br />
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
