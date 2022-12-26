import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async ()=> {
       const resp= await axios.get('https://shop.cyberlearn.vn/api/Product/getAllCategory')
       const data = await resp.data
       return data.content
    }
)
export const getProductByCategory = createAsyncThunk(
    'product/getProduct',
    async (params)=> {
       const resp= await axios.get(`https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${params}`)
       const data = await resp.data
    //    console.log(data)
       return data.content
    }
)