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

//SignIn:
export const Signin = createAsyncThunk(
   //Name:
   'user/signin',
   async (params)=> {
      //Request URL:
      let resp = await fetch('https://shop.cyberlearn.vn/api/Users/signin',{
         //Phương thức:
         method: 'POST',
         //Header:
         header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
         //Biến object thành chuỗi:
         body: JSON.stringify({
            email: params.email,
            password: params.password,
         })
      })
      // Sau khi lấy xong thì lấy JSON:
      let json = await resp.json()
      //Return Json:
      return json.content.accesToken;
   }
)
//SignUp:
export const Signup = createAsyncThunk(
   //Name:
   'user/signup',
   async (params)=> {
      //Request URL:
      let resp = await fetch('https://shop.cyberlearn.vn/api/Users/signup',{
         //Phương thức:
         method: 'POST',
         //Header:
         header:{
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