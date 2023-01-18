import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { ICONS, KEY_SCREEN, COLORS } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Utils from '../../../../app/Utils'

export default memo( function  Appbar () {
  const navigation = useNavigation()
  const dataShoesDetail = useSelector((state) => state.redux.detailShoesData)
  const category = dataShoesDetail?.categories[0]?.category
  return (
    <SafeAreaView style={styles.appbar}>
      <TouchableOpacity 
      style={{paddingHorizontal:15,paddingVertical:5}}
      onPress={() => { navigation.goBack() }}>
        <Image style={[styles.icon, { tintColor: COLORS.dark }]} source={ICONS.icClose} resizeMode='contain' />
      </TouchableOpacity>
      <Text style={styles.title}>{`${category} Shoes`}</Text>
      <TouchableOpacity 
      style={{paddingHorizontal:15,paddingVertical:5}}
      onPress={() => { Utils.showToast('Xin lỗi! Chức năng chưa phát triển.', ICONS.iconUpdate, 2000, 'error') }}>
        <Image style={[styles.icon, { tintColor: COLORS.dark }]} source={ICONS.iconMenu1} resizeMode='contain' />
      </TouchableOpacity>
    </SafeAreaView>
  )
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  icon: {
    width: 24,
    height: 24,
  },
  icon16: {
    width: 16,
    height: 16
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
    textTransform:'capitalize'
  }
})
