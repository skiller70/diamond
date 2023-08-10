import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AddedCartItem } from "../components/DrawerCart";
import { useSelector } from "react-redux";

function Checkout() {
  const { slideCart, slideCartItems } = useSelector(
    (state) => state.initialReducers
  );

  return (
    <>
      <Navbar />
      <div className=" my-32 ">
        <div className=" flex ">
          <div className=" flex-1"></div>
          {/* ITEMS */}
          <div className="flex-1 py-10 px-10 bg-green-200">
            {/* ITEMS LIST */}
            <div className=" bg-white px-10 py-32">
              <div className="  overflow-y-scroll  h-72 p-4 ">
                {slideCartItems.map((item) => (
                  <>
                    <AddedCartItem
                      title={item.title}
                      detail={item.detail}
                      img={item.img}
                      price={item.price}
                      ringSize={item.ringSize}
                      metalT={item.metalT}
                    />
                  </>
                ))}
              </div>
              {/* ITEMS LIST */}
              <div className="text-lg flex flex-col gap-y-2 py-4">
                {/* SUBTOTAL */}
                <div className=" flex justify-between">
                  {" "}
                  <h1> Subtotal</h1>
                  <h1>$727.00</h1>
                </div>
                {/* SUBTOTAL */}

                {/* Taxes */}
                <div className=" flex justify-between">
                  <h1>Taxes(0%)</h1>
                  <h1>$0.00</h1>
                </div>
                {/* Taxes */}

                {/* Shipping */}
                <div className=" flex justify-between">
                  <h1>Shipping (0%)</h1>
                  <h1>$0.00</h1>
                </div>
                {/* Shipping */}

                {/* TOTAL */}
                <div className=" flex justify-between py-4 border-t-[1px]">
                  <h1>Total</h1>
                  <h1>$727.00</h1>
                </div>
                {/* TOTAL */}
              </div>
            </div>
          </div>
          {/* ITEMS */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
