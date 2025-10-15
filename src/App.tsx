import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";

const App: React.FC = (): React.JSX.Element => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
