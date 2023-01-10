import { View, Text } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import SlideShowShoes from './components/SlideShowShoes'
import Detail from './components/Detail'


export default function DetailShoes() {
  return (
    <View style={{flex:1}}>
      <AppBar/>
      <SlideShowShoes/>
      <Detail/>
    </View>
  )
}