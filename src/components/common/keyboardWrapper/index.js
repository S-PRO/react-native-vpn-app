/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 14:44:56
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 14:51:55
* @flow
*/

import * as React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import type { _t_styles } from 'src/flow.types/reactElements';

type _t_props = {
  style?: _t_styles,
  children?: React.Node,
  enabled?: boolean
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const KeyboardWrapper = (props: _t_props) => {
  const Wrapper = Platform.select({
    ios: KeyboardAvoidingView,
    android: View
  });

  const {
    style,
    enabled,
    children,
  } = props;

  return (
    <Wrapper
      style={[styles.container, style]}
      behavior="padding"
      enabled={enabled !== undefined || true}
    >
      {children}
    </Wrapper>
  );
};

export default KeyboardWrapper;
