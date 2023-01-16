import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Appbar from './component/Appbar'
import HeaderProfile from './component/HeaderProfile'
import { COLORS } from '../../common/Constant'
import FormProfile from './component/FormProfile'

const Profile = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.bcground1 }}>
            <Appbar />
            <ScrollView>
                <HeaderProfile />
                <FormProfile />
            </ScrollView>
        </View>
    )
}

export default Profile