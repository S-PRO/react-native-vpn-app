/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 11:24:37
* @Last Modified by: Volynets Serhii
* @Last Modified time: 2018-10-11 11:24:37
* @flow
*/

import { AppRegistry } from 'react-native';
import App from 'src/setup';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
