/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler'
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
// Register background handler
// chế độ forcus và background messageing chỉ lăng nghe. Nên sẽ kết hợp thêm thư viện local notification để push thông báo
  // https://stackoverflow.com/questions/61437271/show-notification-on-foreground-react-native-firebase-v6?fbclid=IwAR16YEUMi4TSimFpwrpvPgR4wOp9P3DfXdhuHocb4CqREB7bI8wFknaKXVA
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    console.log('backgroundMess: '+ remoteMessage)
  });

AppRegistry.registerComponent(appName, () => App);
