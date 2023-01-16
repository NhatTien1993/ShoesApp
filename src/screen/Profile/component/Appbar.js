import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { ICONS, SIZES } from '../../../common/Constant'
import Utils from '../../../../app/Utils';
import { updateProfile } from '../../../redux/ReduxSlice';

export default function Appbar() {
  const isUpdate = useSelector((state) => state.redux.isUpdate)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const handleYes =  () => {
    dispatch(updateProfile(false))
    navigation.goBack()
  }
  
  return (
    <View style={styles.appbar}>
      <TouchableOpacity
        style={{ padding: 5, marginRight: isUpdate ? SIZES.width(24) : SIZES.width(29), alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {
          if (isUpdate) {
            Utils.showAlert('Chưa lưu dữ liệu!\nBạn có muốn rời khỏi trang này?', handleYes)
          } else {
            navigation.goBack()
          }
        }}>
        <Image style={styles.icon} source={ICONS.iconBack} resizeMode='contain' />
      </TouchableOpacity>
      <Text style={styles.appbar__title}>{isUpdate ? 'Edit Profile' : 'Profile'}</Text>
    </View>
  )
}