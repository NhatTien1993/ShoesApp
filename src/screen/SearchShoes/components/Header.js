import { Image, Platform, StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { IMAGES } from '../../../common/Constant'
import { useSelector } from 'react-redux'

const Header = () => {
    const profile = useSelector((state) => state.redux.userProfile)
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: Platform.OS === 'ios' ? 50 : 20,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginHorizontal: 20
        }}>

            <Image
                style={{ width: 80, height: 80, borderRadius: 10 }}
                source={{ uri: profile.avatar }} />
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        marginLeft: 5
    }
})