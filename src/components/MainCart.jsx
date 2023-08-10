import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import diamond from "/diamond.jpg";
import { useDispatch, useSelector } from "react-redux";

function MainCart() {
  // STATE
  const { mainCart, slideCartItems, productDetail } = useSelector(
    (state) => state.initialReducers
  );
  const [metalT, setMetalT] = useState("14ktWG");
  const [ringSize, setRingSize] = useState("3.5");


  // STATE

  // HOOKS

  const dispatch = useDispatch();

  // HOOKS
  return (
    <>
      {/* Est. Delivery: Wednesday, August 9, 2023 */}

      {/* Good | FPY | SI1 */}
      {/* SKU: D-5THSL1242S */}
      {/* 

   $347.00 */}

      {/* 0.19 Carat Pear Yellow Diamond */}
      <div
        className={` overflow-y-scroll  shadow-md fixed top-0 -right-4 z-40 w-[80%] h-screen transition-transform  ${
          mainCart ? "" : "translate-x-full"
        }   bg-white `}
      >
        <div className=" w-[100%] h-10   flex items-center">
          <FontAwesomeIcon
            onClick={() => {
              dispatch({ type: "isOpenCartMenu", payload: false });
            }}
            icon={faChevronRight}
            className=" bg-green-400 cursor-pointer px-4 py-3"
          />
        </div>

        {/* FLEX CONTAINER */}
        <div className=" flex flex-col md:flex-row px-16 justify-between ">
          <div className=" flex-1">
            <img src={diamond} alt="" />
          </div>

          <div className="flex-1">
            <div className=" ">
              <h1 className=" text-xl font-medium">{productDetail.title}</h1>
              <div className=" text-right"> {productDetail.price}</div>
              <p className=" text-sm"> {productDetail.detail}</p>
              <br />
              <p className=" text-sm "> {productDetail.quality}</p>
              <br />
              <div className="border-y-2 py-3 text-center">
                {productDetail.delivery}
              </div>
              <br />
              {/* SELECT SIZE AND METAL */}
              <div className=" flex justify-around">
                {/* METAL */}
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an Metal
                  </label>
                  <select
                    onChange={(e) => {
                      setMetalT(e.target.value);
                    }}
                    id="countries"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-green-300 block w-full p-2.5 dark:bg-gray-700 dark:border-green-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>14kt White Gold</option>
                    <option value="18ktRG">18kt Rose Gold</option>
                    <option value="18ktWG">18kt White Gold</option>
                    <option value="18ktYG">18kt Yellow Gold</option>
                    <option value="platinum">Platinum</option>
                  </select>
                </div>
                {/* METAL */}

                {/* SIZE  */}
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Ring Size
                  </label>
                  <select
                    onChange={(e) => {
                      setRingSize(e.target.value);
                    }}
                    id="countries"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-green-300 block w-full p-2.5 dark:bg-gray-700 dark:border-green-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>3.5</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                </div>
                {/* SIZE  */}
              </div>
              <br />

              {/* SELECT SIZE AND METAL */}

              <div className=" flex justify-center">
                {" "}
                <button className="  border-[1px] border-gray-900 py-2  hover:bg-green-400  hover:text-white w-[100%] mx-[5%] rounded-sm">
                  ADD TO YOUR RING
                </button>
              </div>
              <br />
              <div className=" flex justify-center">
                {" "}
                <button
                  onClick={() => {
                    dispatch({ type: "isOpenSlideCart", payload: true });
                    dispatch({
                      type: "addToSlideCart",
                      payload: {
                        title: productDetail.title,
                        img: "/diamond.jpg",
                        detail: productDetail.detail,
                        price: productDetail.price,
                        ringSize,
                        metalT
                      },
                    });
                  }}
                  className=" bg-green-400 text-white py-2  w-[100%] mx-[5%] rounded-sm"
                >
                  ADD TO YOUR CART
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* FLEX CONTAINER */}

        <div className=" grid grid-cols-3 gap-6 px-10 my-16">
          <div>
            <h1 className=" text-xl font-medium">Carat</h1>
            <br />
            <p>
              Carat is the measure of a diamond's weight and size. We offer an
              array of high-quality diamonds ranging from 0.18 to 25.00 carats-
              with 1.00 carat being the most popular. Carat: 0.19 Looks Like:
              0.20 This will look larger than a 0.19 carat diamond
            </p>
          </div>

          <div>
            <h1 className=" text-xl font-medium">Color</h1>
            <br />
            <p>
              A diamond's color grade actually measures how little color it
              reflects. To strike the best balance between cost and beauty, go
              for diamonds in the Near Colorless range: G, H, and I. Color: FPY
            </p>
          </div>

          <div>
            <h1 className=" text-xl font-medium">Clarity</h1>
            <br />
            <p>
              Clarity indicates how many flaws are visible to the naked eye. Too
              many flaws can detract from a diamond's beauty. Clarity: SI1
              Fluorescence: Medium Eye Clean: Yes Chat with a gemologist for a
              thorough review of this diamond
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCart;
