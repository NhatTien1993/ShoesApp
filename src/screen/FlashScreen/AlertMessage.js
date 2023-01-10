import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS, SIZES } from '../../common/Constant'
import { useState } from 'react'
import { addOrderList } from '../../redux/ReduxSlice'
import { useDispatch} from 'react-redux'
const AlertMessage = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { indexItem, data } = route.params
    const [isPressNo, setIsPressNo] = useState(false)
    const [isPressYes, setIsPressYes] = useState(false)
    const handleNo = () => {
        const newData = data.map((item, index) => {
            if (item.quantity === 0) {
                return {
                    ...item,
                    quantity: item.quantity = 1
                }
            } else {
                return item
            }
        })
        dispatch(addOrderList(newData))
        navigation.goBack()
    }
    const handleYes = () => {
        data.splice(indexItem, 1)
        dispatch(addOrderList(data))
        navigation.goBack()
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity
                onPress={handleNo}
                style={{ backgroundColor: COLORS.dark, position: 'absolute', width: '100%', height: '100%', opacity: 0.2 }} />
            <View style={{ backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: SIZES.width(80) }}>
                <Text style={{ padding: 15, borderBottomWidth: 0.5, borderBottomColor: COLORS.darkLight, width: '100%', textAlign: 'center' }}>Bạn chắc chắn muốn bỏ sản phẩm này?</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleNo}
                        onPressIn={() => { setIsPressNo(true) }}
                        onPressOut={() => { setIsPressNo(false) }}
                        style={{ flex: 1, paddingVertical: 10, borderRightWidth: 0.25, borderRightColor: COLORS.darkLight, justifyContent: 'center', alignItems: 'center', backgroundColor: isPressNo ? COLORS.primaryBlur : COLORS.white }}>
                        <Text style={{ fontSize: 16, color: COLORS.dark }}>Không</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleYes}
                        onPressIn={() => { setIsPressYes(true) }}
                        onPressOut={() => { setIsPressYes(false) }}
                        style={{ flex: 1, paddingVertical: 10, borderLeftWidth: 0.25, borderLeftColor: COLORS.darkLight, justifyContent: 'center', alignItems: 'center', backgroundColor: isPressYes ? COLORS.orangeBlur : COLORS.white }}>
                        <Text style={{ fontSize: 16, color: COLORS.orange }}>Đồng ý</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AlertMessage