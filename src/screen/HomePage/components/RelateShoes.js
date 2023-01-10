import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, ICONS, STYLES,KEY_SCREEN, SIZES } from '../../../common/Constant'
import {  useDispatch, useSelector } from 'react-redux'
import { memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getProductById } from '../../../redux/ReduxThunk'
export default memo(function RelateShoes() {
    const navigation = useNavigation()
    const dispatch=useDispatch()
    const relateShoesData = useSelector((state) => state.redux.relateShoes)
   
    const handleGoDetailShoes = (id) => {
        dispatch(getProductById(id))
        navigation.navigate(KEY_SCREEN.detailShoes)
    }
    const renderItemShoes = ({ item }) => (
        <TouchableOpacity
        activeOpacity={1}
        onPress={()=>{handleGoDetailShoes(item.id)}}
            style={{ backgroundColor: COLORS.white, width: SIZES.width(25),flex:1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginRight: 15, borderRadius: 10, ...STYLES.shadow }}>
            <Image
                resizeMode='cover'
                style={{ width: SIZES.width(20), height: SIZES.height(9), transform: [{ rotateY: '180deg' }] }}
                source={{ uri: item.image }} />

        </TouchableOpacity>
    )
    // console.log('relate Shoes')
    return (
        <View >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.dark }}>Related Products</Text>
                <TouchableOpacity 
                onPress={()=> {navigation.navigate(KEY_SCREEN.allShoes)}}
                style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, color: COLORS.dark }}>Show all</Text>
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={ICONS.iconArrowRight} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
                <FlatList
                    horizontal={true}
                    renderItem={renderItemShoes}
                    data={relateShoesData} />
            </View>

        </View>
    )
})