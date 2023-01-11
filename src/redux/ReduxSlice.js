
import { createSlice } from "@reduxjs/toolkit";
import {
    Signin, Signup, getCategory, getProductByCategory, getProductById, likeProduct, unlikeProduct
    , getProductFavorite, getProduct, getCheckoutProduct, getProfile
} from "./ReduxThunk";

const initialState = {
    categoryData: [],
    shoesData: [],
    allShoes: [],
    isLoadding: false,
    accessToken: '',
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
    orderStatus: 0,
    email: '',
    password: '',
    gender: '',
    name: '',
    phone: '',
    userProfile:{}
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
        setResetAccessToken: (state, action) => {
            state.accessToken = action.payload
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
        resetState: (state, action) => {
            state.categorySelected = 'ADIDAS'
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
            //-------------------------- SignIn --------------------------//
        }).addCase(Signin.pending, (state, action) => {
            //Update State lại:
            state.isLoadding = true // (Làm cái quay vòng vòng)
            //Nếu như SignIn xử lý xong thì FullFilled:
        }).addCase(Signin.fulfilled, (state, action) => {
            //Đã lấy được data-> isLoading cập nhật lại:
            state.isLoadding = false;
            //Tạm thời console.log action ra:
            if (action.payload === undefined) {
                state.accessToken = 1
            } else {
                state.accessToken = action.payload
            }
            //-------------------------- SignUp --------------------------//
        }).addCase(Signup.pending, (state, action) => {
            //Update State lại:
            state.isLoadding = true // (Làm cái quay vòng vòng)
            //Nếu như SignUp xử lý xong thì FullFilled:
        }).addCase(Signup.fulfilled, (state, action) => {
            //Đã lấy được data-> isLoading cập nhật lại:
            state.isLoadding = false;
            //Tạm thời console.log action ra:
            console.log(action.payload);
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
            .addCase(getProfile.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(getProfile.fulfilled, (state, action) => {
                state.isLoadding = false
                state.userProfile = action.payload
            })
    }
})

export const { resetState,setCategorySelected, setRelateShoes, setResetAccessToken, forusSearch, blurSearch, searchShoes, addOrderItem, addOrderList, resetOrderStatus } = homePageSlice.actions
export default homePageSlice.reducer