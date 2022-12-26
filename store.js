// import { createStore } from "redux";
// import { countReducer } from "./src/DemoRedux/Reducer";

//tạo ra 1 store quản lý state tập trung. state global
// export const store= createStore(countReducer)

//Redux toolkit

import {configureStore} from '@reduxjs/toolkit'
import homePageSlice from './src/Login2_Formik/HomePageSlice';
import loginSlice from './src/Login2_Formik/LoginSlice';
import profileSlice from './src/Profile_app/profile/redux/ProfileSlice';
import shoesSlice from './src/ShoesApp/redux/ReduxSlice';
import reduxShoesApp from './src/redux/ReduxSlice'
export const store = configureStore({
    reducer: {
              login2:loginSlice,
              shoesApp:shoesSlice,
              homePage: homePageSlice,
              profile:profileSlice,
              redux:reduxShoesApp
    }
  })