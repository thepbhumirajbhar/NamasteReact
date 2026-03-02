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

      /*
      ! console.log(state); -> shows a proxy object: unreadable 
      ! to see whats in the 'state' do:
      ! console.log(current(state));
      */

      /*
      ! state=[] changes the variable locally but do not change the actual 'Original' state that is passed in the ClearCart as parameter. 
      
      ! hence mutating the state becomes necessary by state.items.length = 0;
      ! or return new empty item{} by 
      ! return {items:[]}
      */


      state.items.length = 0;
      // return {items: []}
    }

  }

})


// exporting actions and reducers. 
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;


//* redux uses Immer(library) BTS: (read)