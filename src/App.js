import React, { useState } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/layouts/Header';
import { Login } from "./pages/account/Login";
import { Register } from "./pages/account/Register";
import { Forgot } from "./pages/account/Forgot";
import { ShopCategory } from './pages/ShopCategory';
import { Love } from './pages/Love';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import {Marketplace} from './pages/Marketplace/Marketplace';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/desserts" element={<ShopCategory category='desserts' />} />
          <Route path="/coffee" element={<ShopCategory category='coffee' />} />
          <Route path="/product" element={<Product />} />
          <Route path="/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/love" element={<Love />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </BrowserRouter>


    </div>
    );

}
export default App;