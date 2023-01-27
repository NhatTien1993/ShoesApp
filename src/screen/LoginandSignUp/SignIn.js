import React, { useRef, memo } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import { IMAGES, KEY_SCREEN, SIZES } from '../../common/Constant';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Signin } from '../../redux/ReduxThunk';
import { resetState, setResetAccessToken } from '../../redux/ReduxSlice';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';



const SignIn = () => {
  const SignInSchema = Yup.object().shape({
    //Email: Kiểu dữ liệu là String và không được phép rỗng và có định dạng mặc định là dạng email và đó là bắt buột:
    /**
     * /Email: Kiểu dữ liệu là String và không được phép rỗng và có định dạng mặc định là dạng email:
     * -> email: Yup.string().min(1,'Vui lòng nhập email').email
     * 
     * Email: Kiểu dữ liệu là String và không được phép rỗng và có định dạng mặc định là dạng email và đó là bắt buột:
     * ->email: Yup.string().min(1,'Vui lòng nhập email').email.require
     */
    email: Yup.string().required('Vui lòng nhập tài khoản').email('Tài khoản phải là email'),

    //Password: Kiểu String (Phải bao gồm CHỮ HOA, thường, ký tự đặc biệt và số & Lớn hơn 8 ký tự)
    // password: Yup.string().matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // )
  })

  const _password = useRef()
  //Navigation Hook:
  const navigation = useNavigation();
  //Dispatch:
  const dispatch = useDispatch()
  //Cach lay tu Redux:
  const accessToken = useSelector((state) => state.redux.accessToken)
  useEffect(() => {

    dispatch(resetState())
    if (!accessToken) {
    } else if (accessToken === 1) {
      alert('Tài khoản hoặc mật khẩu bị sai, vui  lòng nhập lại')
      dispatch(setResetAccessToken(''))
      _password.current?.clear()
    } else {
      //Khong thuc hien gi het
      navigation.navigate(KEY_SCREEN.tabHome)
    }
  }, [accessToken])
  useEffect(() => {
    dispatch(setResetAccessToken(''))
  }, [])
  //Tạo hàm SignIn:
  const signin = (data) => {
    dispatch(Signin(data))
    // console.log(data)
  }


  //View:
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={SignInSchema}
      onSubmit={(data) => {
        signin(data)
      }}
    >
      {({ values, handleChange, handleSubmit, errors, resetForm, touched }) => {
        //Xuất ra thử:
        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{ flex: 1 }}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainBody}>
                  {/* SignIn Logo */}
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      source={IMAGES.signInLogo}
                      style={{
                        width: SIZES.width(30),
                        height: SIZES.height(15),
                        resizeMode: 'cover',
                        marginBottom:30
                      }}
                    />
                  </View>
                  {/* TextField: Email*/}

                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Email"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  {/* <Text>abcsdsad</Text> */}
                  {errors.email && touched.email ? <Text style={{ color: 'red', marginTop: -10, marginBottom: 10, marginLeft: 30 }}>{errors.email} </Text> : null}

                  {/* TextField: Password */}

                  <TextInput
                    ref={_password}
                    style={styles.inputStyle}
                    placeholder="Enter Password" //12345
                    placeholderTextColor="#8b9cb5"
                    keyboardType="default"
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    secureTextEntry={true}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => {
                      if (accessToken) {
                        resetForm({
                          values: {
                            ...values,
                            password: ''
                          }
                        })
                      }
                    }
                    }
                  />

                  {/* Button SignIn */}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                  >
                    <Text style={styles.buttonTextStyle}>SIGN IN</Text>
                  </TouchableOpacity>
                  <Text
                    style={styles.registerTextStyle}
                    onPress={() => navigation.navigate(KEY_SCREEN.signUp)}>
                    New Here ? Sign Up
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
      }}
    </Formik >
  );
}

export default memo(SignIn);

const styles = StyleSheet.create({
  mainBody: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center'
  },
  SectionStyle: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 40,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    color: 'black',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    marginHorizontal: 25,
    marginVertical: 15,
    fontSize: 18,
    paddingVertical: 10

  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
// import React from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   StyleSheet,
//   Text,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
// } from 'react-native';

// const SignIn = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// });

// export default SignIn;