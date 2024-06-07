import React, { useCallback, useContext, useEffect } from "react";
import { Button, Card, Col, Row, Space, notification } from "antd";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../App";
import "./product.css";

function Productlist() {
  const { setCartData, setPreview, productlist, setProductList } =
    useContext(CartContext);
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const server = () => {
      let url;
      if (location.pathname === "/products/mobiles") {
        url = "http://localhost:3001/mobiles";
      } else if (location.pathname === "/products/electronics") {
        url = "http://localhost:3001/electronics";
      } else if (location.pathname === "/products/laptops") {
        url = "http://localhost:3001/laptops";
      } else if (location.pathname === "/products/televisions") {
        url = "http://localhost:3001/televisions";
      }
      axios
        .get(url)
        .then((response) => {
          const updatedList = response.data.map((item) => ({
            ...item,
            discountprice: item.price - item.price * item.discount,
          }));
          setProductList(updatedList);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    server();
  }, [location.pathname, setProductList]);
  // const discountedPrice = useCallback(() => {
  //   const updatedList = productlist.map((item) => ({
  //     ...item,
  //     discountprice: item.price - item.price * item.discount,
  //   }));
  //   setProductList(updatedList);
  // }, [productlist, setProductList]);

  // useEffect(() => {
  //   server();
  //   discountedPrice();
  // }, [location.pathname, discountedPrice]);

  const addToCart = useCallback(
    (product) => {
      setCartData((previousCart) => [...previousCart, product]);
      api["success"]({
        message: "Item added to cart",
        description: `${product.title.substring(
          0,
          40
        )}... has been added to your cart.`,
        duration: 2,
      });
    },
    [setCartData, api]
  );

  const previewdata = (item) => {
    setPreview(item);
  };

  return (
    <div className="productlist">
      {contextHolder}

      <Row gutter={[16, 16]}>
        {productlist.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card className="productcard">
              <Link to={"/productpreview"} onClick={() => previewdata(item)}>
                <div>
                  <img
                    className="list-image"
                    alt={item.title}
                    src={item.image}
                    style={{ height: 200 }}
                  />
                  <p className="product-detail">
                    {item.title.substring(0, 25)}...
                  </p>
                  <span className="discount">{item.discount * 100}% off</span>
                  <br />
                  <span className="discount-price">
                    ₹ {Number(item.discountprice).toLocaleString()}{" "}
                  </span>
                  <span className="mrp">
                    M.R.P: {Number(item.price).toLocaleString()}
                  </span>
                </div>
              </Link>
              <Space>
                <Button type="primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Productlist;
