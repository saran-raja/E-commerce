import React, { useEffect } from "react";
import "./payment.css";
import { Button, Result, Modal } from "antd";
import { Link, useLocation } from "react-router-dom";

function PaymentStep4() {
  const [modal, contextHolder] = Modal.useModal();
  // const location = useLocation();
  setTimeout(() => {}, 1000);
  useEffect(() => {
    const countDown = () => {
      let secondsToGo = 5;
      const instance = modal.success({
        title: "Order is Placed Successfully",
        content: `Automatically redirecting to home page `,
      });
      const timer = setInterval(() => {
        secondsToGo -= 1;
        instance.update({
          content: `Automatically redirect to home page within ${secondsToGo} second.`,
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        instance.destroy();
      }, secondsToGo * 1000);
    };
    countDown();
  }, [modal]);
  return (
    <Result
      status="success"
      title="Order is Placed Successfully"
      subTitle="Order number: 2017182818828182881."
      extra={[
        <Link to={"/"}>
          <Button type="primary" key="console">
            Go Home
          </Button>
          {contextHolder}
        </Link>,
      ]}
    />
  );
}

export default PaymentStep4;
