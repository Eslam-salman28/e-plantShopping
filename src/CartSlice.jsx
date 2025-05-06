import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItem:0, // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; 
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++; 
            state.totalItem+=1
        }
        else{
            state.items.push({ name, image, cost, quantity: 1 });  
            state.totalItem+=1
        }

    },
    removeItem:(state, action) => {
      
        const existingItem = state.items.find(item => item.name === action.payload);
        if (existingItem) {
          state.totalItem-=existingItem.quantity
          state.items = state.items.filter(item => item.name !== action.payload); 
        }
         
         
          
       
       
      
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
            state.totalItem=0
            state.items.forEach((item) => {
                state.totalItem += item.quantity;
            })
             // If the item is found, update its quantity to the new value
}
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
