/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler'
import App from './App';
import {name as appName} from './app.json';
import UserProfile from './src/screen/User/UserProfile';
import ChangePassword from './src/screen/User/ChangePassword';



AppRegistry.registerComponent(appName, () => ChangePassword);
