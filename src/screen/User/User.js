import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, ICONS, KEY_SCREEN, IMAGES } from '../../common/Constant';
/**
 * Create Profile:
 * @returns NguyentruongKhoiNguyen
 */

export default function User() {
    return (
        <View style={styles.container}>
            {/* Title & Description */}
            <View style={styles.titleDescription}>
                <Text style={styles.titleDescription_title}>Athletic Shose</Text>
                <Text style={styles.titleDescription_description}>Ứng Dụng Bán Giày Số 1 Việt Nam </Text>
            </View>

            {/* Logo Adidas */}
            <View style={styles.logo}>
                <Image source={IMAGES.adidasLogo} style={styles.logo_image}/>
            </View>

            {/* Terms & Condition */}

            <TouchableOpacity style={styles.viewTerms}>
                <Image source={ICONS.iconTerms} style={styles.viewTerms_icon}/>
                    <TouchableOpacity style={styles.viewTerms_text}>
                        <Text style={{fontSize: 20}}>Terms & Conditions</Text>
                </TouchableOpacity>
                <Image source={ICONS.iconArrowForward}/>
            </TouchableOpacity>
            

            {/* Privacy Policy */}
            <TouchableOpacity style={styles.viewPolicy}>
                <Image source={ICONS.iconPolicy} style={styles.viewPolicy_icon}/>
                <TouchableOpacity style={styles.viewPolicy_text}>
                    <Text style={{fontSize: 20}}>Privacy Policy</Text>
                </TouchableOpacity>
                <Image source={ICONS.iconArrowForward}/>
            </TouchableOpacity>  
                        
              <Text style={styles.version}>Version 1.01</Text>
              {/* Sign out */}
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titleDescription:{
        justifyContent:'center', 
        alignItems:'center', 
        padding: 30
    },
    titleDescription_title:{
        fontSize: 30, 
        fontWeight:'bold'
    },
    titleDescription_description:{
        fontSize: 22,
    },
    logo:{
        justifyContent:'center', 
        alignItems:'center'
    },
    logo_image:{
        height:150, 
        width:150,
    },
    textLink:{
        color: 'blue',
        fontSize: 20
    },
    viewTerms:{
        paddingTop: 30,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    viewPolicy:{
        paddingTop: 30,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    viewTerms_icon:{
        width:30, 
        height:30, 
        alignSelf:'flex-start',
        height:24, 
        marginRight:8,
    },
    viewPolicy_icon:{
        width:30, 
        height:30, 
        alignSelf:'flex-start',
        height:24, 
        marginRight:8,
    },
    viewTerms_text:{
        flexDirection:'column', 
        alignItems:'center',
    },
    viewPolicy_text:{
        flexDirection:'column', 
        alignItems:'center',
    },
    version:{
        alignSelf:"center"
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
})