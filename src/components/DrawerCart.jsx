import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import diamond from "/diamond.jpg";
import { Link } from "react-router-dom";

function DrawerCart() {
  const { slideCart,slideCartItems } = useSelector((state) => state.initialReducers);
  const dispatch = useDispatch();

  // console.log(slideCartItems)
  return (
    <>
      <div
        className={`  flex flex-col    shadow-md fixed top-0 right-0 z-40 w-[100%] md:w-[35%]  h-[100%] transition-transform   bg-white ${
          slideCart ? "" : "translate-x-full"
        } `}
      >
        {/* CART COUNT ITEMS */}
        <div className=" flex  border-b-[1px] items-center">
          <button
            onClick={() => {
              dispatch({ type: "isOpenSlideCart", payload: false });
            }}
            className=" px-4 py-2 bg-green-400"
          >
            <FontAwesomeIcon icon={faChevronRight} />{" "}
          </button>
          <h1 className=" text-center flex-1 font-medium ">Cart ({slideCartItems.length})</h1>
        </div>
        {/* CART COUNT ITEMS */}

        {/* CLEAR CART */}

        <div className="px-2 py-2 border-b-[1px]">
          <button onClick={()=>{dispatch({type:"clearCart"})}} className=" text-sm">Clear All</button>
        </div>
        {/* CLEAR CART */}

        {/* CART ITEM */}
        <div className="flex-1 overflow-y-scroll -right-5">

          {slideCartItems.map((item)=>(<>
            <AddedCartItem title={item.title} detail={item.detail} img={item.img} price={item.price} id={item.id} ringSize={item.ringSize} metalT={item.metalT} />
          </>))}
        
        </div>
        {/* CART ITEM */}

        {/* CHECKOUT */}
        <div className="w-full flex py-2  border-t-[1px] items-center flex-col">
          {/* SUBTOTAL */}
          <div className=" flex w-[90%]  justify-between   text-sm">
            <h1>SUBTOTAL </h1>
            <h1>$280.00</h1>
          </div>
          <br />
          {/* SUBTOTAL */}

          <Link to="/checkout" className=" bg-green-400 text-white py-2 text-center  w-[90%] px-5    rounded-sm">
            CHECKOUT
          </Link>
        </div>
        {/* CHECKOUT  */}
      </div>
    </>
  );
}

export default DrawerCart;

export const AddedCartItem = (props) => {
  const { title, price, detail, img ,id,ringSize,metalT} = props;
const dispatch = useDispatch()
  return (
    <>
      <div>
        {/* CART DETAILS  */}

        <div className=" my-2 border-b-[1px]">
          <div className=" flex items-center gap-x-2 justify-end mx-4">
            <FontAwesomeIcon icon={faHeart} className="  cursor-pointer h-6" />
            <button onClick={()=>{dispatch({type:"removeCartItem",payload:id})}}> Remove</button>
          </div>
          <div className=" flex  items-center ">
            <img src={img} alt="" width={180} />

            <div className=" w-[100%] pr-4">
              <h1 className="text-lg font-medium">{title}</h1>
              <div className=" flex justify-between">
                <h1>{detail}</h1>
                <h1>{price}</h1>
              </div>
              <h1>Very Good | J | VS2</h1>
              <h1>{id}</h1>
         
                  {/* METAL TYPE AND SIZE */}
                  <div className=" flex text-sm py-2 ">
              <h1 className=" flex-1">Ring size : {ringSize}</h1>
              <h1 className=" ">Metal Type :{metalT} </h1>
              </div>
               {/* METAL TYPE AND SIZE */}
            </div>
          </div>

          <div></div>
        </div>
        {/* CART DETAILS  */}
      </div>
    </>
  );
};
