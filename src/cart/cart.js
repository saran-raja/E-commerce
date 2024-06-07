import React from "react";
import { List, Avatar } from "antd";
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "./cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cartData, setCartData, totalPrice, setTotalprice } =
    useContext(CartContext);
    
  const cartdelete = (itemDelete) => {
    const updatedCart = cartData.findIndex((item) => item.id === itemDelete.id);
    if (updatedCart !== -1) {
      cartData.splice(updatedCart, 1);
      setCartData([...cartData]);
    }
    // const updatedCart =[];
    // const updatedCart = cartData.filter((item) => item.id !== itemDelete.id);
    // setCartData(updatedCart);
  };
  useEffect(() => {
    let totalPrices = 0;
    cartData.forEach((item) => {
      totalPrices += Number(item.discountprice);
    });
    setTotalprice(totalPrices);
  }, [cartData]);
  const value = 0;
  if (value !== 0) {
  }
  return (
    <div className="cart-container">
      <section className="total">
        <p>Cart Total : ₹{totalPrice.toLocaleString()}</p>
        {totalPrice !== 0 && (
          <Link to="/payment">
            <Button type="primary">Proceed to buy</Button>
          </Link>
        )}
      </section>
      <section className="cart-display">
        <List
          itemLayout="horizontal"
          dataSource={cartData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <div className="cart-avatar">
                    <img src={item.image} className="cartimg" shape="square" />
                  </div>
                }
                title={<p>{item.title}</p>}
                description={
                  <span>₹{Number(item.discountprice).toLocaleString()}</span>
                }
              />
              <Button type="primary" onClick={() => cartdelete(item)}>
                Remove
              </Button>
            </List.Item>
          )}
        />
      </section>
    </div>
  );
}

export default Cart;
