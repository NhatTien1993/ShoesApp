import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getProductByCategory } from "./ReduxThunk";
const initialState = {
    categoryData: [],
    shoesData: [],
    isLoadding:false,
    categorySelected: 'ADIDAS',
    relateShoes:[]
}

const homePageSlice= createSlice({
    name:'homePageSlice',
    initialState: initialState,
    reducers: {
        setCategorySelected: (state,action)=> {
            state.categorySelected = action.payload
        },
        setRelateShoes: (state,action)=> {
            state.relateShoes = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getCategory.pending,(state,action)=> {
            state.isLoadding = true
        }).addCase(getCategory.fulfilled,(state,action)=>{
            state.isLoadding = false
            state.categoryData = action.payload
        }).addCase(getProductByCategory.pending,(state,action)=>{
            state.isLoadding = true
        }).addCase(getProductByCategory.fulfilled,(state,action)=>{
            state.isLoadding = false
            state.shoesData = action.payload
        })
    }
})
export const {setCategorySelected,setRelateShoes} =homePageSlice.actions
export default homePageSlice.reducer