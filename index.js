/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Authentication from './screens/Authentication';

AppRegistry.registerComponent(appName, () => Authentication);
