import React from "react";
import { Button, Menu, Typography, Avatar, Divider } from "antd";
import { Link } from "react-router-dom";
import icon from '../images/c1pt87zn.bmp'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Avatar src={icon} size="large" />
      <Typography.Title level={2} className="logo">
        <Link to="/">Cryptoverse</Link>
      </Typography.Title>
      <div>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} />
          <Link to="/">Home</Link>
          <Menu.Item icon={<FundOutlined />} />
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Menu.Item icon={<MoneyCollectOutlined />} />
          <Link to="/exchanges">Exchanges</Link>
          <Menu.Item icon={<BulbOutlined />} />
          <Link to="/news">News</Link>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
