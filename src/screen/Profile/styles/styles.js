import { Platform, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../common/Constant";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    icon: {
        width: 24,
        height: 24,
    },
    icon16: {
        width: 16,
        height: 16
    },
    appbar: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        paddingBottom:15,
        alignItems:'center'
    },
    appbar__title: {
        fontSize: 20,
        fontWeight: '600',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header__image: {
        width: SIZES.height(12),
        height: SIZES.height(12),
        borderRadius: 60,
        borderWidth: 2,
        borderColor: 'black'
    },
    form: {
        padding: 16
    },
    mLeft8: {
        marginLeft: 8
    },
    mTop16: {
        marginTop: 16
    },
    mTop32: {
        marginTop: 32
    },
    input: {
        marginTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
        backgroundColor:COLORS.white,
        borderRadius: 25,
        fontSize:16,
        paddingVertical:Platform.OS==='ios'? 14 : 9,
        borderColor:COLORS.dark,
        borderWidth:1
    },
    submit: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        backgroundColor: 'black',
        borderRadius: 26
    },
    submit__text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }
})