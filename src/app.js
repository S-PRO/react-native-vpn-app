/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 11:25:03
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 13:03:41
* @flow
*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Navigator from './navigator';

type _t_props = {
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default class App extends Component<_t_props> {

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.root}>
        <Navigator />
      </View>
    );
  }
}
