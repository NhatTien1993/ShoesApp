import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICONS, IMAGES } from '../../common/Constant'

const UserProfile = () => {
  return (
    <View>
        {/* Task bar */}
        <View style={styles.taskBar}>
            <TouchableOpacity style={styles.taskBar_touchBack_view}>
                <Image source={ICONS.iconBack} style={styles.taskBar_touchBack_view_icon}/>
            </TouchableOpacity>
            <View style={styles.taskBar_titleView}>
                <Text style={styles.taskBar_titleView_title}>User Profile</Text>
            </View>
        </View>

        {/* Image Profile */}
        <TouchableOpacity style={styles.informProfile}>
            {/* Picture Profile */}
            <Image source={IMAGES.profilePic} style={styles.informProfile_Image}/>
        </TouchableOpacity>
        {/* Column*/}

        {/* Name */}
        <View style={styles.containerInput}>
            <Text>Name</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.icProfile}/>
                <TextInput style={styles.containerInput__input__textInput}/>
            </View>
        </View>

        {/* Email */}
        <View style={styles.containerInput}>
            <Text>Email</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.iconEmail}/>
                <TextInput style={styles.containerInput__input__textInput}/>
            </View>
        </View>

        {/* Gender */}
        <View style={styles.containerInput}>
            <Text>Gender</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.icGenders}/>
                <TextInput secureTextEntry={true} style={styles.containerInput__input__textInput}/>
            </View>
        </View>

        {/* Phone */}
        <View style={styles.containerInput}>
            <Text>Phone</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.icPhone}/>
                <TextInput secureTextEntry={true} style={styles.containerInput__input__textInput}/>
            </View>
        </View>
        {/* Facebook */}
        <View style={styles.containerInput}>
            <Text>Facebook</Text>
            {/* Row*/}
            <View style={styles.containerInput__input}>
                <Image style={styles.containerInput__input__images} source={ICONS.icLink}/>
                <TextInput secureTextEntry={true} style={styles.containerInput__input__textInput}/>
            </View>
        </View>

        {/* Button */}
        <View style={styles.buttonView}>
            {/* Button Update Account*/}
            <TouchableOpacity style={styles.buttonView_TouchStyle}>
                    <Text style={styles.buttonView_TouchStyle_Text}>Update Account</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
    taskBar:{
        backgroundColor:'#a9a9a9',
    },
    taskBar_touchBack_view:{
        flexDirection:'row',
    },
    taskBar_touchBack_view_icon:{
        width:30, 
        height:30, 
        marginLeft:10
    },
    taskBar_titleView:{
        flexDirection:'row'
    },
    taskBar_titleView_title:{
        fontSize:30, 
        alignSelf:'center', 
        marginTop:-35, 
        marginLeft:120, 
        color:'white'
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
    informProfile:{
        flexDirection:'row',
        alignSelf:'center',
    },
    informProfile_Image:{
        width:140, 
        height:140, 
        borderRadius: 100, 
        marginTop:10,
    },
    informProfile_Direction:{
        flexDirection:'column',
        marginTop:-10, 
        padding:10
    },
    informProfile_Direction_Name:{
        fontSize:25, 
        fontWeight:'bold',
    },
    informProfile_Direction_AgeGender:{
        fontSize:15, 
        color:'grey'
    },
    buttonView:{
        flexDirection:'row', 
        alignSelf:'center'
    },
    buttonView_TouchStyle: {
        backgroundColor: '#a9a9a9',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 39,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonView_TouchStyle_Text: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
})