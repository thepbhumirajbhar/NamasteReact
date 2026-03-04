import { configureStore } from "@reduxjs/toolkit";

//! Since we did 'default' export in cartSlice file, that item can be received with any nickname; 
import cartReducer from "./cartSlice";


const appStore = configureStore({
  //* this reducer consists of slice-reducers; modifies the store
  reducer:{
    cart: cartReducer,
  },
}
);

export default appStore;