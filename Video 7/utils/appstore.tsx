import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
  //* this reducer consists of slice-reducers; modifies the store
  reducer:{
    cart: cartReducer,
  },
}
);

export default appStore;