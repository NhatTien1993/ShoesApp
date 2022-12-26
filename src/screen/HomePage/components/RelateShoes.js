import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, ICONS, STYLES,KEY_SCREEN } from '../../../common/Constant'
import {  useSelector } from 'react-redux'
import { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

export default memo(function RelateShoes() {
    const navigation = useNavigation()
    const relateShoesData = useSelector((state) => state.redux.relateShoes)
    const renderItemShoes = ({ item }) => (
        <View

            style={{ backgroundColor: COLORS.white, width: 90, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginRight: 15, borderRadius: 10, ...STYLES.shadow }}>
            <Image
                resizeMode='cover'
                style={{ width: 80, height: 60, transform: [{ rotateY: '180deg' }] }}
                source={{ uri: item.image }} />

        </View>
    )
    console.log('relate Shoes')
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