import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { ICONS, IMAGES } from '../../common/Constant'

const ChangePassword = () => {
  return (
    <View>
        <View style={styles.taskbarView}>
            <View style={styles.taskbarView_touchBack}>
                <TouchableOpacity>
                    <Image source={ICONS.iconBack} style={styles.taskbarView_touchBack_icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.taskbarView_title}>
                <Text style={styles.taskbarView_title_text}>Change Password</Text>
            </View>
        </View>

        {/* Text Input */}
        <View style={styles.containerInput}>
            <Text>Enter Old Password</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.iconPassword}/>
                <TextInput secureTextEntry={true} style={styles.containerInput__input__textInput}/>
            </View>
        </View>
        <View style={styles.containerInput}>
            <Text>Enter New Password</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.iconPassword}/>
                <TextInput secureTextEntry={true} style={styles.containerInput__input__textInput}/>
            </View>
        </View>
        <View style={styles.containerInput}>
            <Text>Confirm New Password</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.iconPassword}/>
                <TextInput secureTextEntry={true} style={styles.containerInput__input__textInput}/>
            </View>
        </View>

        {/* Button Sign out */}
        <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Change Password</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    taskbarView:{
        backgroundColor:'#a9a9a9'
    },
    taskbarView_touchBack:{
        flexDirection:'row'
    },
    taskbarView_touchBack_icon:{
        width:30, 
        height:30, 
        marginLeft:10
    },
    taskbarView_title:{
        flexDirection:'row',
    },
    taskbarView_title_text:{
        fontSize:30, alignSelf:'center', marginTop:-35, marginLeft:75, color:'white'
    },
    containerInput:{
        borderBottomWidth:1,
        borderBottomColor:'#CCC',
        marginTop:20,
    },
    containerInput__input:{
        //Hiển thị theo dòng:
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    containerInput__input__images:{
        width:24,
        height: 24,
    },
    containerInput__input__textInput:{
        flex:1,
        padding: 2,
    },
    buttonStyle: {
        backgroundColor: '#a9a9a9',
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