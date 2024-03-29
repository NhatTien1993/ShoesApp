import { View, Text, Image, TouchableOpacity, LogBox, Platform } from 'react-native'
import React, { memo } from 'react'
import styles from '../styles/styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { ICONS, SIZES } from '../../../common/Constant'
import Utils from '../../../../app/Utils';
import { updateProfile } from '../../../redux/ReduxSlice';

export default memo(function Appbar() {
  const isUpdate = useSelector((state) => state.redux.isUpdate)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const handleYes = () => {
    dispatch(updateProfile(false))
    navigation.goBack()
  }
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <View style={styles.appbar}>
      <TouchableOpacity
        style={{ position: 'absolute', left: 15, top: Platform.OS === 'ios' ? 45 : 15, padding: 5 }}
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
})