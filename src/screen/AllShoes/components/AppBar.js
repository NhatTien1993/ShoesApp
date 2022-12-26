import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { ICONS } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
export default memo(function Appbar() {
  const navigation=useNavigation()
  return (
    <View style={styles.appbar}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Image style={[styles.icon, { tintColor: 'white' }]} source={ICONS.icClose} resizeMode='contain' />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={[styles.icon, { tintColor: 'white' }]} source={ICONS.icTune} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  icon: {
    width: 24,
    height: 24
  },
  icon16: {
    width: 16,
    height: 16
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  }
})
