/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import NAV from './src/navigator';
import MyDrawer from './drawer';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => NAV);
