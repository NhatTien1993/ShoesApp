import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './store'
import { KEY_SCREEN } from './src/common/Constant';

import HomePage from './src/screen/HomePage/HomePage';
import { StackModalNavigator, RootStackNavigator } from './src/Routes/RootStackNavigation';
import Utils from './app/Utils';
import User from './src/screen/User/User';

// Fix lỗi cấu hình thư viện "react-native-snap-carousel" khi chạy App theo link dưới:
// https://stackoverflow.com/questions/73149910/react-native-0-69-1-i-am-facing-issue-deprecated-react-native-prop-types

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={Utils._navigator}>
        <StackModalNavigator />
        {/* <RootStackNavigator /> */}
      </NavigationContainer>
    </Provider>
  )
}
