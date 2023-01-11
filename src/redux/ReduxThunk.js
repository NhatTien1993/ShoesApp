import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
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
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Users/like?productId=${params.id}`, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${params.accessToken}`
         },
      })
      const data = await resp.data
      // console.log(data.content)
      return data.content
   }
)
//cách khác khi sử dụng axios
export const unlikeProduct = createAsyncThunk(
   'product/unlikeProduct',
   async (params) => {
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Users/unlike?productId=${params.id}`, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${params.accessToken}`
         },
      }).then(({ data }) => { return data.content })
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
            Authorization: `Bearer ${params}`
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
      try {
         const resp = await axios.post(`https://shop.cyberlearn.vn/api/Users/order`, {
            "orderDetail": params.myCartData,
            "email": params.email
         }, {
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json; charset=utf-8",
            },
         })
         const data = await resp.data.statusCode
         return data
      } catch (error) {
         // console.error(error)
      }
   }
)
//SignIn:
export const Signin = createAsyncThunk(
   'user/SignIn',
   async (params) => {
      const resp = await fetch(`https://shop.cyberlearn.vn/api/Users/signin`, {
         method: 'POST',
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
         },
         body: JSON.stringify({
            email: params.email,
            password: params.password
         })
      })
      const json = await resp.json()
      //console.log(json)
      return json.content.accessToken;
   }
)
//SignUp:
export const Signup = createAsyncThunk(
   //Name:
   'user/signup',
   async (params) => {
      //Request URL:
      let resp = await fetch('https://shop.cyberlearn.vn/api/Users/signup', {
         //Phương thức:
         method: 'POST',
         //Header:
         header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
         //Biến object thành chuỗi:
         body: JSON.stringify({
            email: params.email,
            password: params.password,
            name: params.name,
            gender: params.gender,
            phone: params.phone,
         })
      })
      // Sau khi lấy xong thì lấy JSON:
      let json = await resp.json()
      //Return Json:
      return json.content.accesToken;
   }
)

export const getProfile = createAsyncThunk(
   'user/getProfile',
   async (params) => {
      const resp = await fetch(`https://shop.cyberlearn.vn/api/Users/getProfile`, {
         method: 'POST',
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${params}`
         },
      })
      const json = await resp.json()
      const { ordersHistory, ...profile } = await json.content
      // console.log(profile.email)
      return profile;
   }
)