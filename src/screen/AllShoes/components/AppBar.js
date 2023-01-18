import { View, Image, TouchableOpacity, StyleSheet, LogBox } from 'react-native'
import React, { memo } from 'react'
import { ICONS, KEY_SCREEN } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
import Utils from '../../../../app/Utils'

export default memo(function Appbar() {
  const navigation = useNavigation()
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return (
    <View style={styles.appbar}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <Image style={[styles.icon, { tintColor: 'white' }]} source={ICONS.icClose} resizeMode='contain' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Utils.showToast('Xin lỗi! Chức năng chưa phát triển.', ICONS.iconUpdate, 2000, 'error') }}>
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
