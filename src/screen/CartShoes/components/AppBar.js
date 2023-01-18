import { View, TouchableOpacity, StyleSheet, Text,LogBox } from 'react-native'
import React, { memo } from 'react'
import { COLORS, ICONS } from '../../../common/Constant'
import Utils from '../../../../app/Utils'
export default memo(function Appbar() {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);
  return (
    <View style={styles.appbar}>
      <TouchableOpacity onPress={() => { Utils.showToast('Xin lỗi! Chức năng chưa phát triển.', ICONS.iconUpdate, 2000, 'error') }}>
        <Text style={{ color: COLORS.dark, fontWeight: '500' }}>Edit</Text>
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
    alignSelf: 'flex-end',
    padding: 16
  }
})
