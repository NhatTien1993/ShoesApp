// import { createStore } from "redux";
// import { countReducer } from "./src/DemoRedux/Reducer";

//tạo ra 1 store quản lý state tập trung. state global
// export const store= createStore(countReducer)

//Redux toolkit

import {configureStore} from '@reduxjs/toolkit'
import reduxShoesApp from './src/redux/ReduxSlice'
export const store = configureStore({
    reducer: {
              redux:reduxShoesApp
    }
  })