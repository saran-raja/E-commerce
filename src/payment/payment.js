import React, { createContext, useEffect, useState } from "react";

import "./payment.css";
import PaymentStep1 from "./paymentstep1";
import Orderstep from "./step";
import { Route, Routes, useLocation } from "react-router-dom";
import PaymentStep2 from "./paymentstep2";
import PaymentStep3 from "./paymentstep3";
import PaymentStep4 from "./paymentstep4";
export const StepContext = createContext();

function Payment() {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const setStep = () => {
      if (location.pathname === "/payment") {
        setCurrentStep(0);
      } else if (location.pathname === "/payment/step2") {
        setCurrentStep(1);
      } else if (location.pathname === "/payment/step3") {
        setCurrentStep(2);
      } else {
        setCurrentStep(3);
      }
    };

    setStep();
  }, [location]);

  return (
    <div className="payment-page-container">
      <StepContext.Provider value={{ currentStep, setCurrentStep }}>
        <Orderstep />
        <Routes>
          <Route path="/" element={<PaymentStep1 />} />
          <Route path="/step2" element={<PaymentStep2 />} />
          <Route path="/step3" element={<PaymentStep3 />} />
          <Route path="/step4" element={<PaymentStep4 />} />
        </Routes>
      </StepContext.Provider>
    </div>
  );
}
export default Payment;
