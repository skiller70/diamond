import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  mainCart: false,
  slideCart: false,
  slideCartItems: [],
  productDetail: { title: "", price: 0, detail: "", quality: "", delivery: "",ringSize:"",metalType:"" },
};

export const initialReducers = createReducer(initialState, {
  // VIEW PRODUCT DETAIL

  viewProductDetail: (state, action) => {
    state.productDetail = {
      title: action.payload.title,
      price: action.payload.price,
      detail: action.payload.detail,
      quality: "Good | FPY | SI1 ",
      delivery: "Est. Delivery: Wednesday, August 9, 2023",
     
      // metalType:action.payload.metalT,
      // ringSize : action.payload.ringSize
    };
   
  },

  // VIEW PRODUCT DETAIL

  // CLEAR CART
   clearCart: (state, action) => {
      state.slideCartItems = []



   },

  // CLEAR CART

  // REMOVE ITEMS
  removeCartItem: (state, action) => {
    console.log(action.payload);
    state.slideCartItems = state.slideCartItems.filter(
      (item) => item.id !== action.payload
    );
  },
  // REMOVE ITEMS

  // ADD TO SLID CART ITEM

  addToSlideCart: (state, action) => {
    state.slideCartItems.push(action.payload);

    console.log(action.payload);
  },
  // ADD TO SLID CART ITEM

  isOpenCartMenu: (state, action) => {
    state.mainCart = action.payload;
  },

  isOpenSlideCart: (state, action) => {
    state.slideCart = action.payload;
  },
});
