import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faHeart as myHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
function ShoppingCard(props) {
  const { title, price, detail, img,id } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <div className="card  w-[100%] shadow-xl">
        <figure className=" relative">
          <img src={img} alt="Shoes" />
          <div className="  absolute top-2 right-4  cursor-pointer">
            <FontAwesomeIcon
              color="red"
              icon={myHeart}
              className=" text-xl  "
            />
          </div>
          {/* <div className="  absolute top-0 right-2 cursor-pointer"><FontAwesomeIcon  icon={faHeart} className=" text-xl  "/></div> */}
        </figure>
        <div className=" border-t-[1px] px-3 py-6">
          {/* TITLE AND PRICE  */}
          <div className=" flex justify-between">
            <h1>{title}</h1>
            <h1>{price}</h1>
          </div>
          <br />
          {/* TITLE AND PRICE  */}
          {/* DETAILS */}
          <h1>{detail}</h1>
          {/* DETAILS */}
          {/* ADD TO CART */}
          <div className=" flex justify-between text-sm  py-4">
            {/* <button
              onClick={() => {
                dispatch({ type: "isOpenSlideCart", payload: true });
                dispatch({
                  type: "addToSlideCart",
                  payload: { title, img, detail, price ,id},
                });
              }}
              className=" bg-green-400 text-white py-1   px-3 rounded-sm"
            >
              ADD TO YOUR CART
            </button> */}
            <button
              onClick={() => {
                dispatch({ type: "isOpenCartMenu", payload: true });
                dispatch({
                  type: "viewProductDetail",
                  payload: { title, img, price, detail,id },
                });
              }}
              className=" bg-green-400 text-white py-1   px-3 rounded-sm"
            >
              VIEW DETAILS
            </button>
          </div>

          {/* ADD TO CART */}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
