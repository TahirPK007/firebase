/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AddUserDataToFirestore from './screens/AddUserDataToFirestore';
import ImageUpload from './screens/ImageUpload';
import MobileVerificaion from './screens/MobileVerificaion';
import Verifywithemail from './screens/Verifywithemail';

AppRegistry.registerComponent(appName, () => App);
