import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React, { memo } from 'react'
import { ICONS, KEY_SCREEN, COLORS } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native';
export default memo( function  Appbar () {
  const navigation = useNavigation()
  const dataShoesDetail = useSelector((state) => state.redux.detailShoesData)
  const category = dataShoesDetail?.categories[0]?.category
  return (
    <View style={styles.appbar}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <Image style={[styles.icon, { tintColor: COLORS.dark }]} source={ICONS.icClose} resizeMode='contain' />
      </TouchableOpacity>
      <Text style={styles.title}>{`${category} Shoes`}</Text>
      <TouchableOpacity onPress={() => { navigation.navigate(KEY_SCREEN.filterShoes) }}>
        <Image style={[styles.icon, { tintColor: COLORS.dark }]} source={ICONS.iconMenu1} resizeMode='contain' />
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
    padding: 16
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
    textTransform:'capitalize'
  }
})
