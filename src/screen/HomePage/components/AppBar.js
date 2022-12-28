import { View, Text } from 'react-native'
import React,{memo} from 'react'

export default memo(function AppBar() {
  console.log('app bar')
  return (
    <View style={{paddingHorizontal:15,paddingTop:15,paddingBottom:10}}>
      <Text style={{fontSize:38,fontWeight:'bold',color:'white'}}>{'Athletic Shoes \nCollection'}</Text>
    </View>
  )
})