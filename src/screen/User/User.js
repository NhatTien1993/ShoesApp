import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, ICONS, KEY_SCREEN, IMAGES, SIZES } from '../../common/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { setFacebook, setResetAccessToken } from '../../redux/ReduxSlice';

export default memo(function User() {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.redux.userProfile)
    const navigation = useNavigation();
    const signOut = () => {
        //Chuyen Trang:
        dispatch(setFacebook(''))
        dispatch(setResetAccessToken(''))
        navigation.navigate(KEY_SCREEN.signIn)

    }
    const Alert = () => {
        alert('This function is being developed')
    }
    const _userProfile = () => {
        navigation.navigate(KEY_SCREEN.profile)
    }
    const _changePassword = () => {
        navigation.navigate(KEY_SCREEN.changePassword)
    }
    console.log('render User')
    return (
        <View style={styles.container}>
            {/* Background */}
            <Image source={IMAGES.backgroundProfile} style={styles.imageBackground} />
            {/* InForm Profile */}
            <View style={styles.informProfile}>
                {/* Picture Profile */}
                <View style={{ marginRight: 15, marginLeft: 5 }}>
                    <Image source={{ uri: profile.avatar }} style={styles.informProfile_Image} />

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(KEY_SCREEN.changeAvatar) }}
                        style={{ backgroundColor: 'blue', position: 'absolute', padding: 5, borderRadius: 20, right: 0, bottom: 10 }}>
                        <Image source={ICONS.icEditFill} style={{ width: 20, height: 20, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.informProfile_Direction}>
                    <Text style={styles.informProfile_Direction_Name}>{profile.name}</Text>
                    <Text style={styles.informProfile_Direction_AgeGender}>{profile.phone}</Text>
                </View>
            </View>
            {/* Setting */}
            <TouchableOpacity
                style={styles.touchList_Function}
                onPress={Alert}
            >
                <Image source={ICONS.icSetting} style={styles.touchList_Function_Icon} />
                <Text style={{ fontSize: 20, color: COLORS.primary }}>Setting</Text>
            </TouchableOpacity>
            {/* Intro and Guide */}
            <TouchableOpacity
                style={styles.touchList_Function}
                onPress={Alert}
            >
                <Image source={ICONS.icGuide} style={styles.touchList_Function_Icon} />
                <Text style={styles.touchList_Function_Title}>Intro and Guide</Text>
            </TouchableOpacity>
            {/* Change Profile */}
            <TouchableOpacity
                onPress={_userProfile}
                style={styles.touchList_Function}>
                <Image source={ICONS.icProfile} style={styles.touchList_Function_Icon} />
                <Text style={styles.touchList_Function_Title}>User Profile</Text>
            </TouchableOpacity>
            {/* Change Password */}
            <TouchableOpacity
                onPress={_changePassword}
                style={styles.touchList_Function}>
                <Image source={ICONS.icLock} style={styles.touchList_Function_Icon} />
                <Text style={styles.touchList_Function_Title}>Change Password</Text>
            </TouchableOpacity>

            {/* Sign out */}
            <TouchableOpacity style={styles.buttonStyle}
                onPress={signOut}>
                <Text style={styles.buttonTextStyle}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: 150,
        width: '100%',
        padding: 10
    },
    informProfile: {
        flexDirection: 'row',
        marginBottom: 15
    },
    informProfile_Image: {
        width: SIZES.width(25),
        height: SIZES.width(25),
        borderRadius: 100,
        marginTop: - 50,
        backgroundColor: '#ccc'
    },
    informProfile_Direction: {
        flexDirection: 'column',
        marginTop: -10,
        padding: 10
    },
    informProfile_Direction_Name: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 5,
        color: COLORS.primary
    },
    informProfile_Direction_AgeGender: {
        fontSize: 15,
        color: 'grey'
    },
    touchList_Function: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: '90%',
        padding: 15,
        paddingBottom: 10,
        borderRadius: 10,
        shadowOpacity: 10,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    touchList_Function_Icon: {
        width: 30,
        height: 30
    },
    touchList_Function_Title: {
        fontSize: 20,
        color: COLORS.primary
    },
    buttonStyle: {
        backgroundColor: 'black',
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

/**
 * Image:
 * +backgroundProfile; profilePic
 * 
 * ICONS:
 * + icSetting, icNotification, icGuide,icProfile,icLock
 */