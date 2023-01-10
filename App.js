import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './store'
import { KEY_SCREEN } from './src/common/Constant';

import HomePage from './src/screen/HomePage/HomePage';
import { RootStackNavigator } from './src/Routes/RootStackNavigation';
import SignIn from './src/screen/LoginandSignUp/SignIn';
import SignUp from './src/screen/LoginandSignUp/SignUp';
import Utils from './app/Utils';



export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer ref={Utils._navigator}>
          <RootStackNavigator />
        </NavigationContainer>
       {/* <SignIn/>  */}
      {/* <SignUp/> */}
    </Provider>
  )
}
