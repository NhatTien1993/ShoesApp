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
import * as Yup from 'yup';
import { Formik, validateYupSchema } from 'formik';

const SignUp = () => {
  const SignUpSchema = Yup.object().shape({
    //Email: Kiểu dữ liệu là String và không được phép rỗng và có định dạng mặc định là dạng email và đó là bắt buột:
    /**
     * /Email: Kiểu dữ liệu là String và không được phép rỗng và có định dạng mặc định là dạng email:
     * -> email: Yup.string().min(1,'Vui lòng nhập email').email
     * 
     * Email: Kiểu dữ liệu là String và không được phép rỗng và có định dạng mặc định là dạng email và đó là bắt buột:
     * ->email: Yup.string().min(1,'Vui lòng nhập email').email.require
     */
    email: Yup.string().min(1, 'Vui long nhap email').email.require,
  
    //Password: Kiểu String (Phải bao gồm CHỮ HOA, thường, ký tự đặc biệt và số & Lớn hơn 8 ký tự)
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    name: Yup.string().required('Field is required'),
  })
  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

  //Hook:
  const navigation = useNavigation();
  //Dispatch:
  const dispatch = useDispatch()
  //Tạo hàm SignIn:
  const signup = (data)=>{
    dispatch(Signup(data))
  }
  <Formik
    initialValues={{ 
      email: '', 
      password: '' ,
      name:'',
      gender:'',
      phone:'',
    }}
    validationSchema={SignUpSchema}
    onSubmit={(data) => SignUp(data)}
  >
      {({ values, handleChange, handleSubmit, errors }) => {
          //Xuất ra thử:
          console.log(errors)
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
                      value={values.email}
                      onChangeText={handleChange('email')}
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
                      value={values.password}
                      onChangeText={handleChange('password')}
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
                      value={values.name}
                      onChangeText={handleChange('name')}
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
                      value={values.phone}
                      onChangeText={handleChange('phone')}
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
      }}
  </Formik>
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