import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Menu from "./pages/Menu/Menu";
import Product from "./pages/Product/Product"
import Cart from "./pages/Cart/Cart";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product-detail" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById("root")
);