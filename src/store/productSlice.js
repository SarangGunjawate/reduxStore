import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const STATUSSES = Object.freeze({            // using freeze do not change values ...................................
  IDLE:'idle',
  ERROR: 'error',
  LOADING: 'loading'
})

// const initialState=[];
const productSlice = createSlice({
  name: 'product',
  initialState: {
        data : [],
        status : STATUSSES.IDLE,

  },
  reducers:{
    // setProducts(state, action){
    //     state.data = action.payload;
    // },
    // setStatus(state, action){
    //     state.status = action.payload;
    // }
  },

  extraReducers: (builder) => {
    builder
        .addCase(fetchProduct.pending, (state, action) => {
            state.status = STATUSSES.LOADING;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSSES.IDLE;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.status = STATUSSES.ERROR;
        });
},

})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

export const fetchProduct = createAsyncThunk('product/fetch', async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})


// export function fetchProduct(){
//     return async function fetchProductThunk(dispatch, getState){
//       dispatch(setStatus(STATUSSES.LOADING))
//         try{
//           const res = await fetch('https://fakestoreapi.com/products');
//           const data = await res.json();
//           dispatch(setProducts(data))
//           dispatch(setStatus(STATUSSES.IDLE))
//         }
//         catch(err){
//           console.log(err)
//           dispatch(setStatus(STATUSSES.IDLE))
//         }
//     }
// }