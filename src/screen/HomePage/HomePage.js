import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import Menu from './components/Menu'
import ListShoes from './components/ListShoes'
import RelateShoes from './components/RelateShoes'

export default function HomePage() {
  return (
    <View>
      <View style={{ backgroundColor: 'black', width: '100%', height: 250, position: 'absolute',borderBottomLeftRadius:40,borderBottomRightRadius:40 }} />
      <SafeAreaView style={{ height: '100%' }}>
        <AppBar />
        <Menu/>
        <ListShoes/>
        <RelateShoes/>
      </SafeAreaView>
    </View>
  )
}