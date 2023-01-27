import { View, Text } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import MyCart from './components/MyCart'
import { COLORS } from '../../common/Constant'
export default function CartShoes() {
  console.log('render Cart')
  return (
    <View style={{flex:1,backgroundColor:COLORS.bcground}}>
      <AppBar/>
      <MyCart/>
    </View>
  )
}