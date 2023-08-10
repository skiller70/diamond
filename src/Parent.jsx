import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Jewellery from "./pages/Jewellery";
import MainCart from "./components/MainCart";
import DrawerCart from "./components/DrawerCart";

function Parent() {
  return (
    <div>
     <div className=" z-50">
     <MainCart/>
     <DrawerCart/>
     </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/Jewellery" Component={Jewellery} />
      </Routes>
    </div>
  );
}

export default Parent;
