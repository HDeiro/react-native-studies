/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import router from './src/routes';

AppRegistry.registerComponent(appName, () => router);
