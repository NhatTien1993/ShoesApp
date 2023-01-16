import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { ICONS, KEY_SCREEN } from '../src/common/Constant';

var _navigator = React.createRef();

function navigate(routeName, params = {}) {
    try {
        _navigator.current?.dispatch(
            CommonActions.navigate({
                name: routeName,
                params,
            }),
        );
    } catch (error) {
        console.error(error)
    }

}


function goback() {
    try { 
        _navigator.current?.dispatch(CommonActions.goBack());
    } catch (error) {
       
    }
}

function showToast(msg='Checked!', icon=ICONS.iconCheck, time = 2000,type='normal', callback = () => {}) {
    navigate(KEY_SCREEN.flashMessage, { msg, icon, time,type, callback })

}
function showAlert(msg='Checked!', accept = () => {},reject= () => {}) {
    navigate(KEY_SCREEN.alertMessage, { msg,accept,reject })

}

export default { _navigator, showToast, navigate, goback ,showAlert}