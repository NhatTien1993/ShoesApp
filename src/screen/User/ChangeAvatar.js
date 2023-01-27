import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker';

import { COLORS, SIZES, STYLES } from '../../common/Constant'
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar } from '../../redux/ReduxSlice';

const ChangeAvatar = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.redux.userProfile)
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      dispatch(changeAvatar({
        ...profile,
        avatar: image.path
      }))
      navigation.goBack()
    });
  }
  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      dispatch(changeAvatar({
        ...profile,
        avatar: image.path
      }))
      navigation.goBack()
    });
  }
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => { navigation.goBack() }}
        style={{ backgroundColor: COLORS.bcground1, position: 'absolute', width: '100%', height: '100%', opacity: 0.8 }} />
      <View style={{
        backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15, width: SIZES.width(100), paddingVertical: 15,
        shadowOffset: {
          width: -2,
          height: -4,
        },
        shadowRadius: 1,
        shadowOpacity: 0.5,
      }}>
        <View style={{ width: 40, borderWidth: 3, borderColor: '#ccc', borderRadius: 5, alignSelf: 'center' }} />
        <Text style={{ fontSize: 20, color: COLORS.dark, textTransform: 'capitalize', fontWeight: '500', paddingTop: 20 }}>Upload photo</Text>
        <Text style={{ fontSize: 14, color: COLORS.secondary, textTransform: 'capitalize', paddingBottom: 20, paddingTop: 5 }}>Choose your profile picture</Text>
        <TouchableOpacity
          onPress={takePhotoFromCamera}
          style={{ paddingVertical: 10, borderRadius: 8, backgroundColor: COLORS.orange, justifyContent: 'center', alignItems: 'center', width: SIZES.width(85), marginVertical: 8 }}>
          <Text style={{ fontSize: 16, color: COLORS.white, textTransform: 'capitalize', fontWeight: '500' }}>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePhotoFromLibrary}
          style={{ paddingVertical: 10, borderRadius: 8, backgroundColor: COLORS.orange, justifyContent: 'center', alignItems: 'center', width: SIZES.width(85), marginVertical: 8 }}>
          <Text style={{ fontSize: 16, color: COLORS.white, textTransform: 'capitalize', fontWeight: '500' }}>Choose from library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
          style={{ paddingVertical: 10, borderRadius: 8, backgroundColor: COLORS.orange, justifyContent: 'center', alignItems: 'center', width: SIZES.width(85), marginTop: 8, marginBottom: 20 }}>
          <Text style={{ fontSize: 16, color: COLORS.white, textTransform: 'capitalize', fontWeight: '500' }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeAvatar