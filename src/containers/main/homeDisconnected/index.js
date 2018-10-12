/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 12:13:09
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 12:17:19
* @flow
*/

import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1
  },
});

const HomeDisconnected = () => (
  <View style={styles.container} />
);

export default HomeDisconnected;
