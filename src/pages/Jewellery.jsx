import React from "react";
import HeadFilter from "../components/HeadFilter";
import Navbar from "../components/Navbar";
import ShoppingCard from "../components/ShoppingCard";
import Footer from "../components/Footer"
import MainCart from "../components/MainCart";
import DrawerCart from "../components/DrawerCart";

function Jewellery() {
  return (
    <>
    {/* <MainCart/>
    <DrawerCart/> */}
      <Navbar />
      <div className=" mt-32 mb-8">
        <HeadFilter />

        <div className="grid  md:grid-cols-3 grid-cols-1 px-6 gap-6 py-16">
          <ShoppingCard
            id="003"
            title="0.30 Carat Radiant Yellow Diamond"
            price="$333.00"
            detail="Very Good | FPY | SI2"
            img="/diamond.jpg"
          />
          <ShoppingCard
            id="003"
            title="0.30 Carat Radiant Yellow Diamond"
            price="$333.00"
            detail="Very Good | FPY | SI2"
            img="/diamond.jpg"
          />

          <ShoppingCard
            id="003"
            title="0.30 Carat Radiant Yellow Diamond"
            price="$333.00"
            detail="Very Good | FPY | SI2"
            img="/diamond.jpg"
          />

          <ShoppingCard
            id="003"
            title="0.30 Carat Radiant Yellow Diamond"
            price="$333.00"
            detail="Very Good | FPY | SI2"
            img="/diamond.jpg"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Jewellery;
