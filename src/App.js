import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";
import Producttype from "./products/producttype";
import Productlist from "./products/productlist";
import Cart from "./cart/cart";
import { createContext, useState } from "react";
import FooterApp from "./footer/footer";
import { FloatButton, notification } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import Productpreview from "./products/productpreview";
import Payment from "./payment/payment";
import Login from "./navbar/login";
// import PaymentMethod from "./payment/paymentmethod";
// import AddAddress from "./payment/addAddress";
// export const PreviewContext = createContext();
export const CartContext = createContext();

function App() {
  const [cartData, setCartData] = useState([]);
  const [preview, setPreview] = useState([]);
  const [totalPrice, setTotalprice] = useState(0);
  const [productlist, setProductList] = useState([]);
  const [discountPrice, setDiscountPrice] = useState([]);
  const [loginData, setLoginData] = useState([]);
  const [loginProfile, setLoginProfile] = useState({});
  const [api, contextHolder] = notification.useNotification();

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartData,
          setCartData,
          preview,
          setPreview,
          productlist,
          setProductList,
          api,
          contextHolder,
          totalPrice,
          setTotalprice,
          loginData,
          setLoginData,
          loginProfile,
          setLoginProfile,
          discountPrice,
          setDiscountPrice,
        }}
      >
        <div>
          <Navbar />
        </div>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Producttype />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/*" element={<Productlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productpreview" element={<Productpreview />} />
            <Route path="/payment/*" element={<Payment />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <div className="footer">
          <FooterApp />
        </div>
        <FloatButton icon={<CommentOutlined className="chaticon" />} />
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
