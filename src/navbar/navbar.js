import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Space, Menu, Avatar, Badge } from "antd";
import "./navbar.css";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { CartContext } from "../App";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function Navbar() {
  const { cartData, loginProfile } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <h1>E-COMMERCE</h1>
        </div>
       
      </div>
      <Space direction="vertical" className="input-wrapper">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          className="search-input"
        />
      </Space>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        className="nav-menu"
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="products">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
      <div className="navbar-icons">
        <div className="navbar-profile">
          <Link to="/login">
            <Avatar icon={<UserOutlined />} className="profile-avatar"
              style={{
                backgroundColor: "rgb(22,119,255)",
                verticalAlign: "middle",
              }}
              size="medium"
              gap={1} >
              {loginProfile.username && loginProfile.username[0].toUpperCase()}
            </Avatar>
          </Link>
          <p className="profile-name">{loginProfile.username}</p>
        </div>
        <div className="cart-icon">
          <Link to={"/cart"} className="linkcart">
            <Space size="small">
              <Badge count={cartData.length} showZero size="small">
                <ShoppingCartOutlined className="cart-icon" />{" "}
              </Badge>
            </Space>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
