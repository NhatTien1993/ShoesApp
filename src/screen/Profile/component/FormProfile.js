
import { View, Text, TouchableOpacity, TextInput, LogBox } from 'react-native'
import React, { useState, memo } from 'react'
import styles from '../styles/styles'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { ICONS } from '../../../common/Constant';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetUpdateStatus, setFacebook, updateProfile } from '../../../redux/ReduxSlice';
import Utils from '../../../../app/Utils';
import { getProfile, getUpdateProfile } from '../../../redux/ReduxThunk';



export default memo(function FormProfile() {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập tên'),
    email: Yup.string().required('Vui lòng nhập email').matches(/^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!yahoo\.mail)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/, 'Sai định dạng và không dùng yahoo.email'),
    gender: Yup.string().required('Vui lòng chọn giới tính'),
    phone: Yup.string().required('Vui lòng nhập sđt').matches(phoneRegExp, 'Vui lòng nhập số điện thoại').min(10, 'Số điện thoại tối thiểu 10 số').max(11, 'Số điện thoại tối đa 11 số'),
  })
  const dispatch = useDispatch()
  const [gender, setGender] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ])
  const profile = useSelector((state) => state.redux.userProfile)
  const isUpdate = useSelector((state) => state.redux.isUpdate)
  const accessToken = useSelector((state) => state.redux.accessToken)
  const statusUpdate = useSelector((state) => state.redux.updateProfileStatus)
  const facebook = useSelector((state) => state.redux.facebook)
  const _gender = profile.gender ? 'male' : 'female'
  const _updateProfile = (values) => {
    const newValues = {
      ...values,
      gender: values.gender === 'male' ? true : false
    }
    dispatch(getUpdateProfile({ token: accessToken, values: newValues }))
    dispatch(updateProfile(false))
  }

  const nameCom = useRef()
  useEffect(() => {
    if (isUpdate) {
      nameCom.current?.focus()
    }
  }, [isUpdate])

  useEffect(() => {
    setGender(_gender)
  }, [profile])

  useEffect(() => {
    if (statusUpdate === 200) {
      dispatch(getProfile(accessToken))
      Utils.showToast('Cập nhật Profile thành công', ICONS.iconCheck, 1500, 'normal');
      dispatch(resetUpdateStatus(''))
    } else if (statusUpdate === 1) {
      Utils.showToast('Xảy ra lỗi khi cập nhật', ICONS.iconCheck, 1500, 'normal');
      dispatch(resetUpdateStatus(''))
    }
  }, [statusUpdate])

  return (
    <Formik
      validationSchema={LoginSchema}
      onSubmit={(values) => _updateProfile(values)}
      initialValues={profile}>
      {({ values, handleChange, handleSubmit, resetForm, errors, touched }) => {

        const handleEditProfile = () => {
          if (!isUpdate) {
            dispatch(updateProfile(true))
            resetForm()
          } else {
            handleSubmit()
          }
        }
        return (

          <View style={[styles.form]}>
            <View style={{ opacity: isUpdate ? 1 : 0.7 }}>
              <Text style={styles.mLeft8}>Name</Text>
              <TextInput
                ref={nameCom}
                editable={isUpdate}
                value={values.name}
                onChangeText={handleChange('name')}
                style={styles.input} placeholder='Name' />
              {errors.name && touched.name ? <Text style={{ color: 'red', marginTop: 5 }}>{errors.name} </Text> : null}

              <Text style={[styles.mLeft8, styles.mTop16]}>Email</Text>
              <TextInput
                onPressIn={() => {
                  if (isUpdate) {
                    Utils.showToast('Email không được chỉnh sửa', ICONS.iconCheck, 1200, 'warning')
                  }
                }}
                editable={false}
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType='email-address'
                autoCapitalize='none'
                style={styles.input} placeholder='example@gmail.com' />
              {errors.email && touched.email ? <Text style={{ color: 'red', marginTop: 5 }}>{errors.email} </Text> : null}

              <Text style={[styles.mLeft8, styles.mTop16]}>Gender</Text>
              <DropDownPicker
                disabled={!isUpdate}
                listMode='SCROLLVIEW'
                containerStyle={{ paddingTop: 8 }}
                style={{ borderRadius: 30, paddingLeft: 15 }}
                textStyle={{ fontSize: 16 }}
                placeholder='Select gender'
                open={open}
                value={gender}
                items={items}
                setOpen={setOpen}
                setValue={setGender}
                onChangeValue={handleChange('gender')}
              />
              {errors.gender && touched.gender ? <Text style={{ color: 'red', marginTop: 5 }}>{errors.gender} </Text> : null}

              <Text style={[styles.mLeft8, styles.mTop16]}>Phone</Text>
              <TextInput
                editable={isUpdate}
                value={values.phone}
                onChangeText={handleChange('phone')}
                style={styles.input} placeholder='Phone' />
              {errors.phone && touched.phone ? <Text style={{ color: 'red', marginTop: 5 }}>{errors.phone} </Text> : null}
              <Text style={[styles.mLeft8, styles.mTop16]}>FacbookId</Text>
              <TextInput
                editable={isUpdate}
                value={facebook}
                onChangeText={(value) => { dispatch(setFacebook(value)) }}
                style={styles.input} placeholder='FacebookId' />

            </View>
            <TouchableOpacity
              onPress={handleEditProfile}
              style={[styles.submit, styles.mTop32]}>
              <Text style={styles.submit__text}>{isUpdate ? 'SAVE' : 'EDIT PROFILE'}</Text>
            </TouchableOpacity>
          </View>

        )
      }}
    </Formik>
  )
})