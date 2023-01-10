import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import Menu from './components/Menu'
import ListShoes from './components/ListShoes'
import { SIZES } from '../../common/Constant'

export default function AllShoes() {
    return (
        <View>
            <View style={{ backgroundColor: 'black', width: '100%', height: 250, position: 'absolute', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
            <SafeAreaView style={{ height:SIZES.height(100) }}>
                <AppBar />
                <Menu/>
                <ListShoes/>
            </SafeAreaView>
        </View >
    )
}