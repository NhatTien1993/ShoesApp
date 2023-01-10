import { View, Image, TouchableOpacity, StyleSheet,Text } from 'react-native'
import React, { memo } from 'react'
import { COLORS, ICONS,KEY_SCREEN } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
import Utils from '../../../../app/Utils'
export default memo(function Appbar() {
  const navigation=useNavigation()
  return (
    <View style={styles.appbar}>
      <TouchableOpacity onPress={()=>{Utils.showToast('Xin lỗi! Chức năng chưa phát triển.', ICONS.iconUpdate, 2000,'error')}}>
        <Text style={{color:COLORS.dark,fontWeight:'500'}}>Edit</Text>
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
    alignSelf:'flex-end',
    padding: 16
  }
})
