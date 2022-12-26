
import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')

export const SIZES = {
    padding:10,
    padding12:12,
    radius: 30,
    width,
    height
}
export const KEY_TOKEN = {
    token:'keyToken',
    category:'category',
    profile: 'profileData'
}
export const COLORS = {
    primary : 'rgb(52,52,52)',
    secondary:'rgb(17,16,20',
    bcground: 'rgb(242,242,242)',
    dark:'black',
    white:'#fff'
}
export const KEY_SCREEN = {
    login:'Login',
    profile: 'profile',
    homeShoes:'HomeShoes',
    // Shoes app
    homePage:'HomePage',
    searchShoes:'SearchShoes',
    addShoes:'AddShoes',
    cartShoes:'CartShoes',
    user:'User',
    tabHome:'TabHome',
    detailShoes:'DetailShoes',
    allShoes:'AllShoes',
    filterShoes:'FilterShoes'
   
}
export const ICONS = {
    icClose : require('../../assets/icons/ic_Close.png'),
    icTune : require('../../assets/icons/ic_Tune.png'),
    icFavorite: require('../../assets/icons/icFavorite.png'),
    iconHeart: require('../../assets/icons/heart.png'),
    iconBack: require('../../assets/icons/ic-back.png'),
    iconList: require('../../assets/icons/ic-list.png'),
    iconEmail: require('../../assets/icons/email.png'),
    iconPassword: require('../../assets/icons/password.png'),
    iconHome: require('../../assets/icons/home.png'),
    iconSearch: require('../../assets/icons/search.png'),
    iconAdd: require('../../assets/icons/add.png'),
    iconCart: require('../../assets/icons/cart.png'),
    iconUser: require('../../assets/icons/user.png'),
    iconArrowRight: require('../../assets/icons/arrowRight.png'),

}
export const IMAGES = {
    
}
export const STYLES = {
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
}

export const ExpiredTime = 8 * 60 * 60 * 1000