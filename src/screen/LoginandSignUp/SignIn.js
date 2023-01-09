import React, {useState} from 'react'
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
import { useDispatch } from 'react-redux';
import { Signin } from '../../redux/ReduxThunk';

const SignIn = () => {
    //Navigation Hook:
    const navigation = useNavigation ();
    //Dispatch:
    const dispatch = useDispatch()
    //Tạo hàm SignIn:
    const signin = (data)=>{
      dispatch(Signin(data)) 
    }
    //View:
    return (
        <View style={styles.mainBody}>
            <View>
              <View>
                {/* SignIn Logo */}
                <View style={{alignItems: 'center'}}>
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
      color: 'white',
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