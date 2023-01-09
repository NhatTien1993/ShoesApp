import { createSlice } from "@reduxjs/toolkit";
import { Signin, Signup, getCategory, getProductByCategory } from "./ReduxThunk";
const initialState = {
    categoryData: [],
    shoesData: [],
    isLoadding:false,
    accessToken:'',
    categorySelected: 'ADIDAS',
    relateShoes:[],
    email: '',
    password:'',
    gender: '',
    name: '',
    phone: '',
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
        },
        
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
            //-------------------------- SignIn --------------------------//
        }).addCase(Signin.pending,(state,action)=>{
            //Update State lại:
            state.isLoadding = true // (Làm cái quay vòng vòng)
            //Nếu như SignIn xử lý xong thì FullFilled:
        }).addCase(Signin.fulfilled,(state,action)=>{
            //Đã lấy được data-> isLoading cập nhật lại:
            state.isLoadding = false;
            //Tạm thời console.log action ra:
            console.log(action.payload);
            //-------------------------- SignUp --------------------------//
        }).addCase(Signup.pending,(state,action)=>{
            //Update State lại:
            state.isLoadding = true // (Làm cái quay vòng vòng)
            //Nếu như SignUp xử lý xong thì FullFilled:
        }).addCase(Signup.fulfilled,(state,action)=>{
            //Đã lấy được data-> isLoading cập nhật lại:
            state.isLoadding = false;
            //Tạm thời console.log action ra:
            console.log(action.payload);
            
        })
    }
})
export const {setCategorySelected,setRelateShoes} =homePageSlice.actions
export default homePageSlice.reducer