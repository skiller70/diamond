import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [opend, setOpend] = useState(false);
  const dispatch = useDispatch();
  const { slideCart, slideCartItems } = useSelector(
    (state) => state.initialReducers
  );

  return (
    <>
      {/* NAV 1 */}
      <div className=" fixed w-[100%] top-0 z-20">
        <div className=" px-6 flex justify-between items-center text-xs md:text-sm   h-12 bg-green-300 w-[100%]">
          <div>
            <h3 className=" font-medium">MY STORE</h3>
          </div>

          <div className="  flex gap-x-6 font-medium">
            <p>WHY DIAMOND</p>
            <h3>CONTACT US</h3>
            <h3>HELP</h3>
          </div>
        </div>
        {/* NAV 1 */}

        {/* NAV 2 */}
        <div className=" px-6 flex  bg-white justify-between  items-center shadow-md w-[100%] h-12 ">
          {/* NAVBRAND */}
          <div className=" px-10">LOGO</div>
          {/* NAVBRAND */}

          {/* NAVLINKS */}
          <div className=" flex-1 hidden lg:flex   justify-between">
            <div className=" relative">
              <h1>Diamonds </h1>
              {/* <div className=" absolute w-20 h-12 bg-red-400"></div> */}
            </div>
            <h1> Lab Diamonds </h1>
            <h1>Engagement Rings </h1>
            <h1>Wedding Rings</h1>
            <h1>Jewelry</h1>
            <h1>Gifts</h1>
            <button className="  peer-hover:[gg]"> Education</button>
            <div
              onClick={() => {
                dispatch({ type: "isOpenSlideCart", payload: true });
              }}
              className="  cursor-pointer "
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span> {slideCartItems.length}</span>
            </div>
          </div>
          {/* NAVLINKS */}

          {/* NAVBAR TOGGLE */}
          <div
            onClick={() => {
              setOpend(!opend);
            }}
            className=" lg:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* NAVBAR TOGGLE */}
        </div>

        {/* NAV 2 */}

        {/* DROPDOWN */}
        <div className=" ">
          {/* CONTAINER */}
          <div className="  grid grid-cols-5 bg-white  py-4 text-xs ">
            {/* 1 div */}
            <div className=" border-r-[1px] px-8 ">
              <div></div>
              <h1 className=" my-2">Find Your Diamond</h1>
              <div className=" flex flex-col gap-y-2">
                <h1>Start with a Diamond</h1>
                <h1>
                  Start with a Lab <br />
                  Diamond
                </h1>
                <h1>
                  Start with a Colored <br /> Diamond
                </h1>
                <h1>
                  Start with a Colored Lab <br /> Diamond
                </h1>
              </div>
            </div>
            {/* 1 div */}
            {/* 2 div */}
            <div className=" border-r-[1px] px-8">
              <h1 className="my-2">Shop By Shape </h1>

              <div className=" flex  justify-between">
                <div className=" flex flex-col gap-y-2">
                  <h1>Emerald</h1>
                  <h1>Cushion </h1>
                  <h1>Heart </h1>
                  <h1>Pear </h1>
                  <h1>Marquise </h1>
                </div>

                <div className=" flex flex-col gap-y-2">
                  <h1> Round</h1>
                  <h1>Radiant</h1>
                  <h1>Princess</h1>
                  <h1>Asscher</h1>
                  <h1>Oval</h1>
                </div>
              </div>
            </div>

            {/* 2 div */}

            {/* 3 div */}
            <div className=" border-r-[1px] px-5 ">
              <h1 className="my-2">Quick Search</h1>
              <div className=" flex flex-col gap-y-2">
                <h1>Shop Loose Diamonds</h1>
                <h1>1 Carat Diamonds</h1>
                <h1>1.5 Carat Diamonds</h1>
                <h1>2 Carat Diamonds</h1>
                <h1>3 Carat Diamonds</h1>
              </div>
              <div></div>
            </div>
            {/* 3 div */}
            {/* 4 div */}
            <div className=" px-6">
              <h1 className=" my-2">Get Schooled</h1>
              <div className=" flex flex-col gap-y-2">
                <h1>Diamond Inventory - How it Works</h1>
                <h1>Why We're Different</h1>
                <h1>Intro to the 4 Cs</h1>
                <h1>Diamond Trends</h1>
                <h1>Conflict Free Diamonds</h1>
              </div>
              <div></div>
            </div>
            {/* 4 div */}

            {/* 5 div */}
            <div>
              <h1>Get Schooled</h1>
              <div>
                <h1>Shop Loose Diamond</h1>
                <h1>Shop Loose Diamond</h1>
                <h1>Shop Loose Diamond</h1>
                <h1>Shop Loose Diamond</h1>
                <h1>Shop Loose Diamond</h1>
              </div>
              <div></div>
            </div>
            {/* 5 div */}
          </div>
          {/* CONTAINER */}
        </div>
        {/* DROPDOWN */}
      </div>

      {/* MOBILE VIEW */}
      <div
        className={`lg:hidden overflow-y-scroll shadow-md fixed top-0 left-0 z-40 w-64 h-[100%] transition-transform  ${
          opend ? "" : "-translate-x-full "
        }  lg:translate-x-0 bg-white`}
      >
        <div>
          <div className=" p-5">
            <FontAwesomeIcon
              className=" cursor-pointer "
              onClick={() => {
                setOpend(false);
              }}
              icon={faX}
            />
          </div>

          <div className="border-y-[1px] py-2 border-gray-700">
            <div className="mx-3 ">
              <h1>Diamond</h1>
              <div className=" hidden">sadasdasd</div>
            </div>
          </div>

          <div className="border-b-[1px] py-2 border-gray-700">
            <div className="mx-3 ">
              <h1>Lab Diamond</h1>
            </div>
          </div>

          <div className="border-b-[1px] py-2 border-gray-700">
            <div className="mx-3 ">
              <h1>Engagement Rings</h1>
            </div>
          </div>

          <div className="border-b-[1px] py-2 border-gray-700">
            <div className="mx-3 ">
              <h1>Wedding Rings</h1>
            </div>
          </div>

          <div className="border-b-[1px] py-2 border-gray-700">
            <div className="mx-3 ">
              <h1>Jewelry</h1>
            </div>
          </div>

          <div className="border-b-[1px] py-2  border-gray-700">
            <div className="mx-3 ">
              <h1>Gifts</h1>
            </div>
          </div>

          <div className="border-b-[1px] py-2 border-gray-700">
            <div className="mx-3 ">
              <h1>Education</h1>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
    </>
  );
}

export default Navbar;
