import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0aWVubmhhdDJAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVklFV19QUk9GSUxFIiwibmJmIjoxNjcyODI5NDAzLCJleHAiOjE2NzI4MzMwMDN9.gDyBSStiMn46_DY1vwjaZ2kJ5Qxu3Wuar-XnWQbpVG0"
export const getCategory = createAsyncThunk(
   'category/getCategory',
   async () => {
      const resp = await axios.get('https://shop.cyberlearn.vn/api/Product/getAllCategory')
      const data = await resp.data
      return data.content
   }
)
export const getProductByCategory = createAsyncThunk(
   'product/getByCategory',
   async (params) => {
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${params}`)
      const data = await resp.data
      //    console.log(data)
      return data.content
   }
)
export const getProduct = createAsyncThunk(
   'product/getProduct',
   async (params) => {
      try {
         const response = await fetch('https://shop.cyberlearn.vn/api/Product')
         const json = await response.json()
         return json.content
      } catch (error) {
         console.error(error)
      }
   }
)
export const getProductById = createAsyncThunk(
   'product/getById',
   async (params) => {
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${params}`)
      const data = await resp.data
      // console.log(data.content)
      return data.content
   }
)

export const likeProduct = createAsyncThunk(
   'product/likeProduct',
   async (params) => {
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Users/like?productId=${params}`, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${token}`
         },
      })
      const data = await resp.data
      console.log(data.content)
      return data.content
   }
)
//cách khác khi sử dụng axios
export const unlikeProduct = createAsyncThunk(
   'product/unlikeProduct',
   async (params) => {
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Users/unlike?productId=${params}`, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${token}`
         },
      }).then(({ data }) => { return data.content })
      console.log(resp)
      return resp
   }
)
export const getProductFavorite = createAsyncThunk(
   'product/productFavorite',
   async (params) => {
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Users/getproductfavorite`, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${token}`
         },
      })
      const data = await resp.data.content.productsFavorite
      // console.log(data)
      return data
   }
)
export const getCheckoutProduct = createAsyncThunk(
   'user/checkoutProduct',
   async (params) => {
      const resp = await axios.post(`https://shop.cyberlearn.vn/api/Users/order`, {
         "orderDetail": params,
         "email": "tiennhat1@gmail.com"
      }, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
         },
      })
      const data = await resp.data.statusCode
      // console.log(data)
      return data
   }
)
export const getSignIn = createAsyncThunk(
   'user/SignIn',
   async (params) => {
      const resp = await fetch(`https://shop.cyberlearn.vn/api/Users/signin`, {
         method:'POST',
         headers:{
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
         },
         body:JSON.stringify({
            email: "tiennhat1@gmail.com",
            password: "123123@N"
         })
      })
      const json= await resp.json()
      console.log(json)
   }
)
