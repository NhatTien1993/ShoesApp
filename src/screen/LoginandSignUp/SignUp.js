import React, { useEffect, useState, memo } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  LogBox,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { COLORS, IMAGES, SIZES, ICONS } from '../../common/Constant';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getSignup } from '../../redux/ReduxThunk';
import * as Yup from 'yup';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import Utils from '../../../app/Utils';
import { resetSignupMessage } from '../../redux/ReduxSlice';

const SignUp = () => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Vui lòng nhập email').required('Email là bắt buộc'),

    //Password: Kiểu String (Phải bao gồm CHỮ HOA, thường, ký tự đặc biệt và số & Lớn hơn 8 ký tự)
    password: Yup.string().required('Password là bắt buộc').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Mật khẩu phải tối thiểu 8 ký tự, bao gồm chữ in hoa,chữ thường, số và ký tự đặc biệt"
    ),
    confirmpassword: Yup.mixed().oneOf([Yup.ref('password')], 'Mật khẩu xác nhận chưa đúng').required('Vui lòng xác nhận mật khẩu'),
    name: Yup.string().required('Vui lòng điền tên'),
    phone: Yup.string().matches(phoneRegExp, 'Vui lòng nhập số điện thoại').min(10, 'Số điện thoại tối thiểu 10 số').max(11, 'Số điện thoại tối đa 11 số'),
  })
  const signupMessage = useSelector((state) => state.redux.signupMessage)
  const [gender, setGender] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ])
  //Hook:
  const navigation = useNavigation();
  //Dispatch:
  const dispatch = useDispatch()
  const init = {
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    gender: '',
    phone: '',
  }
  useEffect(() => {
    if (signupMessage && signupMessage != 1) {
      Utils.showToast(signupMessage, ICONS.iconCheck, 1500, 'normal');
      dispatch(resetSignupMessage(''))
    } else if (signupMessage === 1) {
      Utils.showToast('Đăng ký xảy ra lỗi!', ICONS.iconCheck, 1500, 'normal');
      dispatch(resetSignupMessage(''))
    }
  }, [signupMessage])
  return <Formik
    initialValues={init}
    validationSchema={SignUpSchema}
    onSubmit={(data) => {
      const { confirmpassword, ...rest } = data
      const newData = {
        ...rest,
        gender: rest.gender === 'male' ? true : false
      }
      dispatch(getSignup(newData))
    }}

  >
    {({ values, handleChange, handleSubmit, setValues, errors, touched }) => {
      if (gender != values.gender) {
        setValues({
          ...values,
          gender: gender
        })
      }

      return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, backgroundColor: COLORS.bcground,paddingBottom:10 }}>
            <ScrollView >
              <View style={styles.appbar}>
                <TouchableOpacity
                  style={{ paddingHorizontal: 15, paddingVertical: 5 }}
                  onPress={() => { navigation.goBack() }}>
                  <Image style={[styles.icon, { tintColor: COLORS.dark }]} source={ICONS.iconBack} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ paddingHorizontal: 15, paddingVertical: 5 }}
                  onPress={() => { Utils.showToast('Xin lỗi! Chức năng chưa phát triển.', ICONS.iconUpdate, 2000, 'error') }}>
                  <Image style={[styles.icon, { tintColor: COLORS.dark }]} source={ICONS.iconMenu1} resizeMode='contain' />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                {/* Logo Sign Up */}
                <Image
                  source={IMAGES.signUpLogo}
                  style={{
                    width: SIZES.height(10),
                    height: SIZES.height(10),
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                {/* Sign Up with Email */}
                <View style={styles.SectionStyle}>
                  <Image style={styles.iconStyle} source={ICONS.iconEmail} />
                  <TextInput
                    autoCapitalize='none'
                    style={styles.inputStyle}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Email"
                    placeholderTextColor="#8b9cb5"
                    keyboardType="email-address"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                </View>
                {errors.email && touched.email ? <Text style={{ color: 'red', marginTop: 5, marginLeft: 25, marginTop: -5 }}>{errors.email} </Text> : null}
                {/* Sign Up Password */}
                <View style={styles.SectionStyle}>
                  <Image style={styles.iconStyle} source={ICONS.iconPassword} />
                  <TextInput
                    style={styles.inputStyle}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Password"
                    placeholderTextColor="#8b9cb5"
                    returnKeyType="next"
                    secureTextEntry={true}
                    blurOnSubmit={false}
                    value={values.password}
                    autoCapitalize='none'
                    onChangeText={handleChange('password')}
                  />
                </View>
                {errors.password && touched.password ? <Text style={{ color: 'red', marginTop: 5, marginLeft: 25, marginTop: -5 }}>{errors.password} </Text> : null}
                {/* Sign Up Confirm Password */}
                <View style={styles.SectionStyle}>
                  <Image style={styles.iconStyle} source={ICONS.iconPassword} />
                  <TextInput
                    style={styles.inputStyle}
                    underlineColorAndroid="#f000"
                    placeholder="Confirm Password"
                    placeholderTextColor="#8b9cb5"
                    returnKeyType="next"
                    secureTextEntry={true}
                    blurOnSubmit={false}
                    value={values.confirmpassword}
                    autoCapitalize='none'
                    onChangeText={handleChange('confirmpassword')}
                  />
                </View>
                {errors.confirmpassword && touched.confirmpassword ? <Text style={{ color: 'red', marginTop: 5, marginLeft: 25, marginTop: -5 }}>{errors.confirmpassword} </Text> : null}
                {/* Sign Up Name */}
                <View style={styles.SectionStyle}>
                  <Image style={styles.iconStyle} source={ICONS.icProfile} />
                  <TextInput
                    style={styles.inputStyle}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Name"
                    placeholderTextColor="#8b9cb5"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={values.name}
                    autoCapitalize='none'
                    onChangeText={handleChange('name')}
                  />
                </View>
                {errors.name && touched.name ? <Text style={{ color: 'red', marginTop: 5, marginLeft: 25, marginTop: -5 }}>{errors.name} </Text> : null}
                {/* Sign Up with Gender */}
                <View>
                  <Image style={{
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    zIndex: 5555,
                    top: 33,
                    left: 27
                  }} source={ICONS.icGenders} />
                  <DropDownPicker
                    listMode='SCROLLVIEW'
                    containerStyle={{ paddingBottom: 10, paddingTop: 20, justifyContent: 'center', alignItems: 'center', width: SIZES.width(100), paddingHorizontal: 20 }}
                    style={{ borderRadius: 30, paddingLeft: 35, borderColor: '#dadae8' }}
                    textStyle={{ fontSize: 16 }}
                    placeholder='Select gender'
                    open={open}
                    value={values.gender}
                    items={items}
                    setOpen={setOpen}
                    setValue={setGender}
                    onChangeValue={handleChange('gender')}
                  />
                </View>

                {/* Sign Up with Phone */}
                <View style={styles.SectionStyle}>
                  <Image style={styles.iconStyle} source={ICONS.icPhone} />
                  <TextInput
                    style={styles.inputStyle}
                    keyboardType={'number-pad'}
                    underlineColorAndroid="#f000"
                    placeholder='Enter Phone'
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                  />
                </View>
                {errors.phone && touched.phone ? <Text style={{ color: 'red', marginTop: 5, marginLeft: 25, marginTop: -5 }}>{errors.phone} </Text> : null}
                {/* Button Register */}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5} onPress={handleSubmit}>
                  <Text style={styles.buttonTextStyle}>REGISTER</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )
    }}
  </Formik >
}

export default memo(SignUp);

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    zIndex: -1
  },
  iconStyle: {
    width: 24,
    height: 24,
    position: 'absolute',
    zIndex: 1,
    top: Platform.OS === 'ios' ? 11 : 15,
    left: 8
  },

  buttonStyle: {
    //Màu nền:
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: SIZES.width(25),
    marginTop: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 15,
    fontSize: 16,
  },
  inputStyle: {
    width: '100%',
    color: 'black',
    paddingRight: 15,
    paddingLeft: 35,
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    fontSize: 16,
    backgroundColor: COLORS.white,
  },
  icon: {
    width: 24,
    height: 24,
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
    paddingHorizontal: 10
  },
});