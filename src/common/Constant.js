
import { useNavigation } from '@react-navigation/native'
import {Dimensions} from 'react-native'
import FlashMessage from '../screen/FlashScreen/FlashMessage'
const {width,height} = Dimensions.get('window')
// export const getFlashMessage = (title='Checked!',icon=ICONS.iconCheck,time=1000,action=()=>{})=> {
//     const props = {title,icon,time,action}
//     const navigation=useNavigation()
//     navigation.navigate(KEY_SCREEN.flashMessage,{...props})
// }

export const SIZES = {
    padding:10,
    padding12:12,
    radius: 30,
    width(x){
        let a= (x*width)/100
        return a
    },
    height(y){
        let a= (y*height)/100
        return a
    }
}
export const KEY_TOKEN = {
    token:'keyToken',
    myCart:'myCart'
}
export const COLORS = {
    primary : 'rgb(52,52,52)',
    primaryBlur : 'rgba(230,230,230,0.9)',
    secondaryBlur : 'rgba(0,0,0,0.7)',
    secondary:'rgb(17,16,20)',
    bcground: 'rgb(242,242,242)',
    dark:'black',
    darkLight:'#aaa',
    white:'#fff',
    greylight:'#ccc',
    redLike:'red',
    orange:'rgb(227,81,59)',
    orangeBlur:'rgba(227,81,59,0.2)',
}
export const KEY_SCREEN = {

    // Shoes app
    homePage:'HomePage',
    searchShoes:'SearchShoes',
    addShoes:'AddShoes',
    cartShoes:'CartShoes',
    user:'User',
    tabHome:'TabHome',
    detailShoes:'DetailShoes',
    allShoes:'AllShoes',
    filterShoes:'FilterShoes',
    signIn: 'signIn',
    signUp:'signUp',
    alertMessage:'AlertMessage',
    flashMessage:'FlashMessage'

   
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
    iconTerms: require('../../assets/icons/terms.png'),
    iconPolicy: require('../../assets/icons/policy.png'),
    iconArrowForward: require('../../assets/icons/icon_arrow_forward.png'),
    iconMenu: require('../../assets/icons/icMenu.png'),
    iconMenu1: require('../../assets/icons/more_horiz.png'),
    iconStar: require('../../assets/icons/star.png'),
    iconHalfStar: require('../../assets/icons/halfStar.png'),
    iconMinus: require('../../assets/icons/icMinus.png'),
    iconDelete: require('../../assets/icons/icDelete.png'),
    iconCheck: require('../../assets/icons/icCheck.png'),
    iconCartCheckout: require('../../assets/icons/icCartCheckout.png'),
    iconUpdate: require('../../assets/icons/icUpdate.png'),
}

export const IMAGES = {
    avatar: require('../../assets/images/avatar.jpeg'),
        //SignIn
    signInLogo: require('../../assets/SignIn.png'),
    //SignUp:
    signUpLogo: require('../../assets/SignUp.jpg'),
    //Logo:
    adidasLogo: require('../../assets/Adidas_Logo.jpg')
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