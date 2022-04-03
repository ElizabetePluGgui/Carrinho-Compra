import React, { FC } from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";

import "../src/styles/global";

const Router: FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
    </Routes>
);

export default Router;
