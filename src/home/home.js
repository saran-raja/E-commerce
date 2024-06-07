import { Button } from "antd";
import React from "react";

import Imgslider from "../slider/imageslider";
import { Link } from "react-router-dom";

import "./home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <h1>Welcome to our E-Commerce Store</h1>

        <Link to="/products">
          <Button type="primary" size="large">
            Shop Now
          </Button>
        </Link>
      </div>
      <Imgslider />
    </div>
  );
}
export default Home;
