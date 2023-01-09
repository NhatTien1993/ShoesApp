import { View, Text,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import Menu from './components/Menu'
import ListShoes from './components/ListShoes'
import RelateShoes from './components/RelateShoes'
import { SIZES } from '../../common/Constant'

export default function HomePage() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'black', width: '100%', height: 250, position: 'absolute',borderBottomLeftRadius:40,borderBottomRightRadius:40 }} />
      <View style={{ minHeight: SIZES.height(105) }}>
        <AppBar />
        <Menu/>
        <ListShoes/>
        <RelateShoes/>
      </View>
    </ScrollView>
  )
}