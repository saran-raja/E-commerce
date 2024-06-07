import React, { useContext } from "react";
import { CartContext } from "../App";
import { List, Button } from "antd";
import { Link } from "react-router-dom";

function PaymentStep3() {
  const { cartData, totalPrice } =
    useContext(CartContext);

  return (
    <div className="review-container">
      <section className="payment-cart-review">
        <div className="review-content">
          <List
            itemLayout="horizontal"
            dataSource={cartData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <img src={item.image} className="cartimg" shape="square" />
                  }
                  title={<p>{item.title}</p>}
                  description={
                    <div>
                      <span>
                        ₹{Number(item.discountprice).toLocaleString()+ `${" "}`}
                      </span>
                      <h className="mrp">M.R.P :{item.price + `${" "}`}</h>
                      <h className="offer">
                        {Number(item.discount * 100).toLocaleString() + "% off"}
                      </h>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </div>
        <div className="review-total-proceed">
          <section className="review-cart-price">
            <p>Order Total: : ₹{totalPrice.toLocaleString()}</p>
            {totalPrice !== 0 && (
              <Link to="/payment/step4">
                <Button type="primary">Place Your Order and Pay</Button>
              </Link>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}
export default PaymentStep3;
