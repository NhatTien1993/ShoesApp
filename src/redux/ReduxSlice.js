
import { createSlice } from "@reduxjs/toolkit";
import {
    Signin, getSignup, getCategory, getProductByCategory, getProductById, likeProduct, unlikeProduct
    , getProductFavorite, getProduct, getCheckoutProduct, getProfile, getUpdateProfile, getChangePassword
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
    userProfile: {},
    isUpdate: false,
    updateProfileStatus: '',
    signupMessage: '',
    changePassStatus: '',
    facebook: ''
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
        resetUpdateStatus: (state, action) => {
            state.updateProfileStatus = action.payload
        },
        resetChangePassStatus: (state, action) => {
            state.changePassStatus = action.payload
        },
        resetState: (state, action) => {
            state.categorySelected = 'ADIDAS'
        },
        updateProfile: (state, action) => {
            state.isUpdate = action.payload
        },
        resetSignupMessage: (state, action) => {
            state.signupMessage = action.payload
        },
        setFacebook: (state, action) => {
            state.facebook = action.payload
        },
        changeAvatar: (state, action) => {
            state.userProfile = action.payload
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
        }).addCase(getSignup.pending, (state, action) => {
            //Update State lại:
            state.isLoadding = true // (Làm cái quay vòng vòng)
            //Nếu như getSignup xử lý xong thì FullFilled:
        }).addCase(getSignup.fulfilled, (state, action) => {
            //Đã lấy được data-> isLoading cập nhật lại:
            state.isLoadding = false;
            if (action.payload) {
                state.signupMessage = action.payload
            } else {
                state.signupMessage = 1
            }

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
            .addCase(getUpdateProfile.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(getUpdateProfile.fulfilled, (state, action) => {
                state.isLoadding = false
                if (action.payload === undefined) {
                    state.updateProfileStatus = 1
                } else {
                    state.updateProfileStatus = action.payload
                }
            })
            .addCase(getChangePassword.pending, (state, action) => {
                state.isLoadding = true
            }).addCase(getChangePassword.fulfilled, (state, action) => {
                state.isLoadding = false
                if (action.payload === undefined) {
                    state.changePassStatus = 1
                } else {
                    state.changePassStatus = action.payload
                }
            })
    }
})

export const { changeAvatar, setFacebook, resetChangePassStatus, resetSignupMessage, resetUpdateStatus, updateProfile, resetState, setCategorySelected, setRelateShoes, setResetAccessToken, forusSearch, blurSearch, searchShoes, addOrderItem, addOrderList, resetOrderStatus } = homePageSlice.actions
export default homePageSlice.reducer