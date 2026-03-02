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
    //! action parameter unn reducer fun m jata h jaha fun ka bahar se info/data needed ho, ex: add data(konsa data?)
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state) =>{
      state.items.pop()
    },

    clearCart:(state) => {
      state.items.length = 0;
    }

  }

})


// exporting actions and reducers. 
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
