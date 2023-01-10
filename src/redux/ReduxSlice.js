import { createAction, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getCategory, getProductByCategory, getProductById, likeProduct, unlikeProduct, getProductFavorite, getProduct, getCheckoutProduct } from "./ReduxThunk";
const initialState = {
    categoryData: [],
    shoesData: [],
    allShoes: [],
    isLoadding: false,
    categorySelected: 'ADIDAS',
    relateShoes: [],
    isSearch: false,
    search: '',
    detailShoesData: {},
    idProductFavorite: [],
    isLike: false,
    isUnLike: false,
    orderItem: {},
    orderList: [],
    orderStatus:0
}

const homePageSlice = createSlice({
    name: 'homePageSlice',
    initialState: initialState,
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
        },
        setRelateShoes: (state, action) => {
            state.relateShoes = action.payload
        },
        forusSearch: (state, action) => {
            state.isSearch = true
        },
        blurSearch: (state, action) => {
            state.isSearch = false
        },
        searchShoes: (state, action) => {
            state.search = action.payload
        },
        addOrderItem: (state, action) => {
            state.orderItem = action.payload
        },
        addOrderList: (state, action) => {
            state.orderList = action.payload
        },
        resetOrderStatus: (state, action) => {
            state.orderStatus = action.payload
        },
        
    },
    extraReducers: builder => {
        builder.addCase(getCategory.pending, (state, action) => {
            state.isLoadding = true
        }).addCase(getCategory.fulfilled, (state, action) => {
            state.isLoadding = false
            state.categoryData = action.payload
        }).addCase(getProductByCategory.pending, (state, action) => {
            state.isLoadding = true
        }).addCase(getProductByCategory.fulfilled, (state, action) => {
            state.isLoadding = false
            state.shoesData = action.payload
        })
            .addCase(getProduct.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(getProduct.fulfilled, (state, action) => {
                state.isLoadding = true
                state.allShoes = action.payload
            })
            .addCase(getProductById.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(getProductById.fulfilled, (state, action) => {
                state.isLoadding = false
                state.detailShoesData = action.payload
            })
            .addCase(likeProduct.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(likeProduct.fulfilled, (state, action) => {
                state.isLoadding = false
                state.isLike = !state.isLike
            })
            .addCase(unlikeProduct.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(unlikeProduct.fulfilled, (state, action) => {
                state.isLoadding = false
                state.isUnLike = !state.isUnLike
            })

            .addCase(getProductFavorite.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(getProductFavorite.fulfilled, (state, action) => {
                state.isLoadding = false
                const products = action.payload
                const idProducts = products.map((product) => product.id)
                state.idProductFavorite = idProducts
            })
            .addCase(getCheckoutProduct.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(getCheckoutProduct.fulfilled, (state, action) => {
                state.isLoadding = false
                state.orderStatus = action.payload
            })
    }
})
export const { setCategorySelected, setRelateShoes, forusSearch, blurSearch, searchShoes, addOrderItem, addOrderList,resetOrderStatus } = homePageSlice.actions
export default homePageSlice.reducer