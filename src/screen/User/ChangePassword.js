import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Platform, LogBox } from 'react-native'
import React, { useEffect,memo } from 'react'
import { COLORS, ICONS, IMAGES, SIZES } from '../../common/Constant'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getChangePassword } from '../../redux/ReduxThunk';
import Utils from '../../../app/Utils';
import { resetChangePassStatus } from '../../redux/ReduxSlice';


const ChangePassword = () => {
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const accessToken = useSelector((state) => state.redux.accessToken)
    const changePassStatus = useSelector((state) => state.redux.changePassStatus)
    const ChangePasswordSchema = Yup.object().shape({
        newpassword: Yup.string().required('Password là bắt buộc').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Mật khẩu phải tối thiểu 8 ký tự, bao gồm chữ in hoa,chữ thường, số và ký tự đặc biệt"
        ),
        confirmPassword: Yup.mixed().oneOf([Yup.ref('newpassword')], 'Mật khẩu xác nhận chưa đúng').required('Vui lòng xác nhận mật khẩu'),
    })
    const handleChangePassword = (data) => {
        const { confirmPassword, ...newData } = data
        dispatch(getChangePassword({ accessToken, data: newData }))
    }
    useEffect(() => {
        if (changePassStatus === 200) {
            Utils.showToast('Cập nhật mật khẩu thành công', ICONS.iconCheck, 1500, 'normal', () => { navigation.goBack() });
            dispatch(resetChangePassStatus(''))
        } else if (resetChangePassStatus === 1) {
            Utils.showToast('Xảy ra lỗi khi cập nhật', ICONS.iconCheck, 1500, 'error');
            dispatch(resetChangePassStatus(''))
        }
    }, [changePassStatus])
    return (
        < Formik
            initialValues={{
                newpassword: '',
                confirmPassword: ''
            }}
            onSubmit={handleChangePassword}
            validationSchema={ChangePasswordSchema} >
            {({ values, handleChange, handleSubmit, touched, errors }) => {
                //Xuất ra thử:
                return (
                    <View>
                        <View style={styles.taskbarView}>
                            <TouchableOpacity
                                onPress={() => { navigation.goBack() }}
                                style={styles.taskbarView_touchBack}>
                                <Image source={ICONS.iconBack} style={styles.taskbarView_touchBack_icon} />
                            </TouchableOpacity>
                            <View style={styles.taskbarView_title}>
                                <Text style={styles.taskbarView_title_text}>Change Password</Text>
                            </View>
                        </View>

                        {/* Text Input */}
                        <View style={styles.containerInput}>
                            <Text>Enter New Password</Text>
                            {/* Row*/}
                            <View style={styles.containerInput__input}>
                                <Image style={styles.containerInput__input__images} source={ICONS.iconPassword} />
                                <TextInput
                                    value={values.newpassword}
                                    onChangeText={handleChange('newpassword')}
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                    style={styles.containerInput__input__textInput} />
                            </View>
                        </View>
                        {errors.newpassword && touched.newpassword ? <Text style={{ color: 'red', marginTop: 5, marginLeft: 25, marginTop: 5 }}>{errors.newpassword} </Text> : null}

                        <View style={styles.containerInput}>
                            <Text>Confirm New Password</Text>
                            {/* Row*/}
                            <View style={styles.containerInput__input}>
                                <Image style={styles.containerInput__input__images} source={ICONS.iconPassword} />
                                <TextInput
                                    value={values.confirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                    style={styles.containerInput__input__textInput} />
                            </View>
                        </View>
                        {errors.confirmPassword && touched.confirmPassword ? <Text style={{ color: 'red', marginTop: 5, marginLeft: 25, marginTop: 5 }}>{errors.confirmPassword} </Text> : null}

                        {/* Button Sign out */}
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            }
        </Formik >

    )
}

export default memo(ChangePassword)

const styles = StyleSheet.create({
    taskbarView: {
        backgroundColor: '#a9a9a9',
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        paddingHorizontal: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.height(10)
    },
    taskbarView_touchBack: {
        padding: 10,
        position: 'absolute',
        left: 15,
        bottom: 12
    },
    taskbarView_touchBack_icon: {
        width: 24,
        height: 24,
    },
    taskbarView_title_text: {
        fontSize: 24, alignSelf: 'center'
    },
    containerInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        marginTop: 25,
        marginHorizontal: 10
    },
    containerInput__input: {
        //Hiển thị theo dòng:
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInput__input__images: {
        width: 24,
        height: 24,
    },
    containerInput__input__textInput: {
        flex: 1,
        padding: 8,
        fontSize: 16
    },
    buttonStyle: {
        backgroundColor: '#a9a9a9',
        borderWidth: 0,
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: SIZES.width(20),
        marginTop: 40,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: COLORS.dark,
        paddingVertical: 10,
        fontSize: 16,
    },
})