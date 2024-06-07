import React, { useContext} from "react";
import { Steps } from "antd";
import { StepContext } from "./payment";
import { useNavigate } from "react-router-dom";

function Orderstep() {
  const { currentStep } = useContext(StepContext);
  const navigate = useNavigate();

  const onChange = (current) => {
    // console.log("onChange:", current);
    switch (current) {
      case 0:
        navigate("/payment");
        break;
      case 1:
        navigate("/payment/step2");
        break;
      case 2:
        navigate("/payment/step3");
        break;
    }
  };

  return (
    <div>
      <section className="step-section">
        <Steps
          className="payment-steps"
          current={currentStep}
          onChange={onChange}
          items={[
            {
              title: "Delivery address",
            },
            {
              title: "Select a payment method",
            },
            {
              title: "Review items and delivery",
            },
            {
              title: "Place Order",
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Orderstep;
