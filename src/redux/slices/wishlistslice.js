import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishList:(state,action)=>{
            return state.filter(item=>item.id !==action.payload)
        }
    }
})

export const {addToWishList,removeFromWishList} = wishlistslice.actions;
export default wishlistslice.reducer;