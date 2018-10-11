/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 18:02:21
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 18:31:54
* @flow
*/
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';

type _t_props = {
  primary: boolean,
}

const styles = StyleSheet.create({
  container: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: COLORS.regentGray,
    opacity: 0.3,
    marginLeft: 5,
    marginRight: 5,
  },
  primary: {
    opacity: 1,
  },
});

const CircleIndicator = (props: _t_props) => {
  const {
    primary
  } = props;
  return (
    <View style={[styles.container, primary && styles.primary]} />
  );
};

export default CircleIndicator;
