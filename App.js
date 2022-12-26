import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

import Login2 from './src/Login2_Formik/Login2'

import { Provider } from 'react-redux';
import { store } from './store'
import ShoesApp from './src/ShoesApp/ShoesApp';
import DemoLocalStorage from './src/DemoLocalStorage/DemoLocalStorage';
import { KEY_SCREEN } from './src/common/Constant';
import ShowAllShoes from './src/Login2_Formik/HomePage';
import EditProfilePage from './src/Profile_app/profile/EditProfilePage';
import DemoNotification from './src/DemoNotification/DemoNotification';
import DemoGoogleMap from './src/DemoGoogleMaps/DemoGoogleMap';
import HomePage from './src/screen/HomePage/HomePage';
import { RootStackNavigator } from './src/Routes/RootStackNavigation';


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
        {/* <Stack.Navigator
          initialRouteName={KEY_SCREEN.homePage} > */}
          {/* <Stack.Screen name={KEY_SCREEN.homePage} component={HomePage}
            options={{ headerShown: false }} />
          <Stack.Screen name={KEY_SCREEN.homeShoes} component={ShowAllShoes}
            options={{
             headerShown:false
            }} /> */}
          {/* <Stack.Screen name={KEY_SCREEN.profile} component={EditProfilePage}
            options={{
             headerShown:false
            }} /> */}
          {/* <Stack.Screen name={'Home_Shoes'} component={ShoesApp}
            options={{
             headerShown:false
            }} /> */}
          {/* <Stack.Screen name={'Demo_Notification'} component={DemoNotification}
            options={{
             headerShown:false
            }} /> */}
          {/* <Stack.Screen name={'Demo_GoogleMap'} component={DemoGoogleMap}
            options={{
             headerShown:false
            }} /> */}
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    </Provider>
  )
}
