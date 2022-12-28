import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';


import { Provider } from 'react-redux';
import { store } from './store'
import { KEY_SCREEN } from './src/common/Constant';

import HomePage from './src/screen/HomePage/HomePage';
import { RootStackNavigator } from './src/Routes/RootStackNavigation';
import Login from './src/screen/LoginandSignUp/Login';


export default function App() {

  // chế độ forcus và background messageing chỉ lăng nghe. Nên sẽ kết hợp thêm thư viện local notification để push thông báo
  // https://stackoverflow.com/questions/61437271/show-notification-on-foreground-react-native-firebase-v6?fbclid=IwAR16YEUMi4TSimFpwrpvPgR4wOp9P3DfXdhuHocb4CqREB7bI8wFknaKXVA

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('FCM: ' + JSON.stringify(remoteMessage))
    });

    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
      <RootStackNavigator />
      </NavigationContainer>
      {/* <Login/> */}
    </Provider>
  )
}
