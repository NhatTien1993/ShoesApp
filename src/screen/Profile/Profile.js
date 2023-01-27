import { View, Text, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React from 'react'
import Appbar from './component/Appbar'
import HeaderProfile from './component/HeaderProfile'
import { COLORS } from '../../common/Constant'
import FormProfile from './component/FormProfile'

const Profile = () => {
    console.log('render Profile')
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.bcground1 }}>
            <Appbar />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView style={{ flex: 1 }}>
                        <HeaderProfile />
                        <FormProfile />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Profile