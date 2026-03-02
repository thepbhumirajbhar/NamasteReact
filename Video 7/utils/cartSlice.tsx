import { createSlice } from "@reduxjs/toolkit"

//* createSlice is a function that takes a configuration to create a slice
const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [] as any[]
  },

  reducers: {
    //* write reducer fun corresponding to 'each action'

    // takes 2 parameters: modifies the state based on action
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) =>{
      state.items.pop()
    },

    clearCart:(state, action) => {
      state.items.length = 0;
    }

  }

})


// exporting actions and reducers. 
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
