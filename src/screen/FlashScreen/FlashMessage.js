import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../common/Constant'
import { useNavigation, useRoute } from '@react-navigation/native'

import { useEffect } from 'react'

const FlashMessage = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { msg, icon, callback,time,type} = route.params
  const styleType= type === 'normal'? COLORS.white : type === 'warning' ? 'yellow' : type=== 'error' ? COLORS.orange : COLORS.white
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack();
      callback()
    }, time)
    return () => { clearTimeout(timer) }
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <View
        style={{ backgroundColor: COLORS.dark, position: 'absolute', width: '100%', height: '100%', opacity: 0.2 }} />
      <View style={{ backgroundColor: COLORS.secondaryBlur, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
        <Image
          style={{ width: 40, height: 40, tintColor:styleType , marginTop: 20, marginHorizontal: 20 }}
          source={icon} />
        <Text style={{ paddingHorizontal: 15, paddingBottom: 15, paddingTop: 5, color:styleType,fontWeight:'500',fontSize:16 }}>{msg}</Text>
      </View>
    </View>
  )
}

export default FlashMessage