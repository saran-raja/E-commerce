import React, { useContext, useState } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import "./productpreview.css";
import {
  Button,
  Card,
  Col,
  Flex,
  Image,
  Input,
  List,
  Rate,
  Space,
  notification,
} from "antd";
import { TruckOutlined } from "@ant-design/icons";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function ProductPreview() {
  const { preview, setCartData, productlist, setPreview } =
    useContext(CartContext);
  const data = [
    {
      pincode: "637212",
      delivery: "Available Two Day Delivery ",
    },
    {
      pincode: "637215",
      delivery: "3-4 days",
    },
    {
      pincode: "637203",
      delivery: "Available One Day Delivery ",
    },
  ];
  const [delivery, setDelivery] = useState("");
  const [inputPin, setInputPin] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [value, setValue] = useState(3);

  const addToCart = (product) => {
    setCartData((previousCart) => [...previousCart, product]);
    setTimeout(() => {
      api["success"]({
        message: "Item added to cart",
        description: `${
          product.title.substring(0, 40) + "..."
        } has been added to your cart.`,
        duration: 2,
      });
    }, 100);
  };
  const previewdata = (item) => {
    setPreview(item);
  };
  const pincodeSearch = () => {
    let match = false;
    data.forEach((pin) => {
      if (inputPin === pin.pincode) {
        console.log(pin.delivery);
        setDelivery(pin.delivery);
        match = true;
      }
      if (!match) {
        console.log("not matched");
        setDelivery("PIN code is not serviceable for delivery.");
      }
    });
  };

  return (
    <>
      <div className="container-preview">
        {contextHolder}
        <div className="productpreview-image">
          <Image width={200} src={preview.image} />
        </div>
        <div className="product-content">
          <p>{preview.title}</p>
          

          <h className="discount-price">
            ₹{preview.discountprice + `${"   "}`}
          </h>

          <h className="mrp">M.R.P :{preview.price + `${" "}`}</h>
          <h className="offer">
            { Number(preview.discount * 100).toLocaleString() + "% off"}
          </h>
          <br></br>
          <br></br>
          <Flex gap="small" wrap="wrap">
            <Link to="/cart">
              <Button type="primary" onClick={() => addToCart(preview)}>
                Buy Now
              </Button>
            </Link>
            <Button type="primary" onClick={() => addToCart(preview)}>
              Add to Cart
            </Button>
          </Flex>
          <br></br>
          <Flex gap="middle" vertical>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span>{desc[value - 1]}</span> : null}
          </Flex>
          <p>
            DELIVERY OPTIONS <TruckOutlined />
          </p>
          <Space.Compact style={{ width: "200px" }}>
            <Input
              placeholder="Enter Pin Code"
              onChange={(e) => setInputPin(e.target.value)}
              value={inputPin}
            />
            <Button type="primary" onClick={pincodeSearch}>
              Check
            </Button>
          </Space.Compact>
          {delivery && (
            <>
              <p className="delivery-duration">{delivery}</p>
            </>
          )}
          <p className="delivery-optioncontent">
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </p>
          <h className="seller-heading">SELLER</h>
          <br />
          <p className="seller-name">Appario Retail Private Ltd</p>
        </div>
      </div>
      <section className="similar-product">
        <h>SIMILAR PRODUCTS</h>
        <br />
        <br />
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 5,
            lg: 5,
            xl: 5,
            xxl: 5,
          }}
          dataSource={productlist}
          renderItem={(item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card className="productcard">
                <Link to={"/productpreview"} onClick={() => previewdata(item)}>
                  <div className="similar-product-card">
                    <img
                      alt={item.title}
                      src={item.image}
                      style={{ height: 200 }}
                    />
                    <p>{item.title.substring(0, 25) + "..."}</p>
                    <h>₹{Number(item.discountprice).toLocaleString()}</h>
                  </div>
                </Link>
                <Space>
                  <Button type="primary" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </Space>
              </Card>
            </Col>
          )}
        />
      </section>
    </>
  );
}

export default ProductPreview;
