import { createSlice } from "@reduxjs/toolkit";

// const initialState=[];
const productSlice = createSlice({
  name: 'product',
  initialState: {
        data : [],
        statue : ''
  },
  reducers:{
    add(state, action){
        state.push(action.payload);
    },

    remove(state, action){
        return state.filter((item) => item.id !== action.payload);
    }
  }

})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;