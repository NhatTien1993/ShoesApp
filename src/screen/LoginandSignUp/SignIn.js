import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { IMAGES, KEY_SCREEN, SIZES } from '../../common/Constant';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, Signin } from '../../redux/ReduxThunk';
import { resetState, setResetAccessToken } from '../../redux/ReduxSlice';
import { useEffect } from 'react';

const SignIn = () => {
  //Set state:
  const [statePassword, setStatePassword] = useState('123123@N');
  const [stateEmail, setStateEmail] = useState('tiennhat1@gmail.com');
  //Navigation Hook:
  const navigation = useNavigation();
  //Dispatch:
  const dispatch = useDispatch()
  //Cach lay tu Redux:
  const accessToken = useSelector((state) => state.redux.accessToken)
  useEffect(() => {
    dispatch(resetState())
    if (!accessToken) {
      console.log(accessToken)
    } else if (accessToken === 1) {
      alert('Tài khoản hoặc mật khẩu bị sai, vui  lòng nhập lại')
      dispatch(setResetAccessToken(''))
    } else {
      //Khong thuc hien gi het
      setStateEmail('')
      setStatePassword('')
      navigation.navigate(KEY_SCREEN.tabHome)
    }
  }, [accessToken])
  useEffect(() => {
    dispatch(setResetAccessToken(''))
  }, [])
  //Tạo hàm SignIn:
  const signin = () => {
    const data = {
      email: stateEmail,
      password: statePassword,
    }
    dispatch(Signin(data))
    // console.log(accessToken)
  }

  // console.log(stateEmail)
  // console.log(statePassword)
  
  //View:
  return (
    <View style={styles.mainBody}>
      <View>
        <View>
          {/* SignIn Logo */}
          <View style={{ alignItems: 'center' }}>
            <Image
              source={IMAGES.signInLogo}
              style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
              }}
            />
          </View>
          {/* TextField: Email*/}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              value={stateEmail}
              onChangeText={(value) => setStateEmail(value)}
            />
          </View>
          {/* TextField: Password */}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Password" //12345
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
              value={statePassword}
              onChangeText={(value) => setStatePassword(value)}
            />
          </View>
          {/* Button SignIn */}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={signin}>
            <Text style={styles.buttonTextStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate(KEY_SCREEN.signUp)}>
            New Here ? Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    //SIZE.height(%)
    height: SIZES.height(8),
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
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