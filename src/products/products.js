import React from "react";
import { Route, Routes } from "react-router-dom";
import Producttype from "../producttype";

function Products() {
  return (
    <Routes>
      <Route path="/products" element={<Producttype />} />
    </Routes>
  );
}

export default Products;
