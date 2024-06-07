import React, { useState } from "react";
import { Button, Form, Input } from "antd";

import "./payment.css";
import {useNavigate } from "react-router-dom";

function PaymentStep1() {
    // const {currentStep, setCurrentStep}=useContext(StepContext)
//   const [current, setCurrent] = useState(0);
  const [addressBtn, setAddressBtn] = useState(false);
  const navigate = useNavigate();
  const addressSubmit = () => {
   navigate ("/payment/step2");
    setAddressBtn(false);
    // setCurrentStep(1);
  };

  return (
    <div className="payment-page-container">
      <section className="payment-content">
        <br />
        <Button type="primary" onClick={() => setAddressBtn(!addressBtn)}>
          Add New Address
        </Button>
        {addressBtn && (
          <div className="address-Form">
            <Form
              name="trigger"
              style={{ maxWidth: 240 }}
              layout="vertical"
              autoComplete="off"
              onFinish={addressSubmit}
            >
              <Form.Item
                className="form-input"
                hasFeedback
                name="Name"
                validateFirst
                rules={[
                  { max: 15 },
                  { max: 15, message: "Continue input to exceed 6 chars" },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                className="form-input"
                hasFeedback
                name="MobileNumber"
                validateFirst
                rules={[
                  { max: 10 },
                  // { max: 3, message: "Continue input to exceed 6 chars" },
                ]}
              >
                <Input placeholder="10-digit mobile number" />
              </Form.Item>
              <Form.Item
                className="form-input"
                hasFeedback
                name="Pincode"
                validateFirst
                rules={[
                  { max: 6 },
                  // { max: 3, message: "Continue input to exceed 6 chars" },
                ]}
              >
                <Input placeholder="Pincode" />
              </Form.Item>
              <Form.Item
                className="form-input"
                hasFeedback
                name="city"
                validateFirst
                rules={[
                  { max: 10 },
                  // { max: 10, message: "Continue input to exceed 6 chars" },
                ]}
              >
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item
                className="form-input"
                hasFeedback
                name="state"
                validateFirst
                rules={[
                  { max: 10 },
                  // { max: 6, message: "Continue input to exceed 6 chars" },
                ]}
              >
                <Input placeholder="State" />
              </Form.Item>
              <Form.Item
                className="form-input"
                hasFeedback
                name="Landmark"
                validateFirst
                rules={[
                  { max: 15 },
                  // { max: 6, message: "Continue input to exceed 6 chars" },
                ]}
              >
                <Input placeholder="Landmark(Optional)" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Deliver Here
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </section>
    </div>
  );
}
export default PaymentStep1;
