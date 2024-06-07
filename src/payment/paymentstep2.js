import React from "react";
import { Button, Checkbox, Input, InputNumber } from "antd";
import { Link } from "react-router-dom";

function PaymentStep2() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="payment-page-container">
      <div className="payment-method">
        <Checkbox onChange={onChange} name="method">
          Credit or debit card
        </Checkbox>
        <br />
        <Input
          placeholder="Enter Card Number"
          className="payment-card-input"
        ></Input>
        <br />
        <InputNumber
          placeholder="CVV"
          max={999}
          className="payment-cvv-input"
        ></InputNumber>
        <br />
        <Checkbox onChange={onChange} name="method">
          Other UPI Apps
        </Checkbox>
        <br />
        <p className="upi-methods">Gpay,Paytm,phonepay</p>
        <Checkbox onChange={onChange} name="method">
          Cash on Delivery/Pay on Delivery
        </Checkbox>
        <br />
        <br />
        <Link to={"/payment/step3"}>
          {" "}
          <Button type="primary">Use this payment method</Button>
        </Link>
      </div>
    </div>
  );
}
export default PaymentStep2;
