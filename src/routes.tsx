import React, { FC } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/styles/global";

import { Home } from "../src/pages/Home";
import { Cart } from "../src/pages/Cart";

const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Home />} />
            <Route path="*" element={<Cart />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
