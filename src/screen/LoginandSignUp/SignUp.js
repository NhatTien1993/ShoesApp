import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { IMAGES } from '../../common/Constant';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Signup } from '../../redux/ReduxThunk';

const SignUp = () => {
  //Hook:
  const navigation = useNavigation();
  //Dispatch:
  const dispatch = useDispatch()
  //Tạo hàm SignIn:
  const signup = (data)=>{
    dispatch(Signup(data))
  }
  return(
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          {/* Logo Sign Up */}
          <Image
            source={IMAGES.signUpLogo}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <View>
          {/* Sign Up with Email */}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle} 
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          {/* Sign Up Password */}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          {/* Sign Up Name */}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          {/* Sign Up with Gender */}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder='Enter Gender'
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
            />
          </View>
          {/* Sign Up with Phone */}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              keyboardType={'number-pad'}
              underlineColorAndroid="#f000"
              placeholder='Enter Phone'
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
            />
          </View>
          {/* Button Register */}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5} onPress={signup}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    //Màu nền:
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
    marginBottom: 20,
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});