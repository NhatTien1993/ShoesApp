import { Image, Platform, StyleSheet, View } from 'react-native'
import React,{memo} from 'react'
import { IMAGES } from '../../../common/Constant'
const Header = () => {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: Platform.OS === 'ios'? 50 : 20,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginHorizontal: 15
        }}>

            <Image
                style={{ width: 50, height: 50, borderRadius: 10 }}
                source={IMAGES.avatar} />
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        marginLeft:5
    }
})