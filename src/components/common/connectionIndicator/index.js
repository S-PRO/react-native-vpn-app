/*
* @Author: Volynets Serhii
* @Date: 2018-10-12 16:10:50
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-12 16:37:25
* @flow
*/
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import type { _t_styles } from 'src/flow.types/reactElements';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import { INDICATOR_STATUS } from 'src/config/text.constants';
import Text from '../text';

type _t_props = {
  status: boolean,
  style?: _t_styles,
  titleStyle?: _t_styles,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    borderRadius: 19,
    borderWidth: 1,
    width: 120,
    height: 36,
    backgroundColor: COLORS.whiteDark,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  text: {
    fontFamily: FONTS.SF_Pro_Display_Medium,
    fontSize: 13,
    color: COLORS.osloGray,
  },
});

const Button = (props: _t_props) => {
  const {
    status,
    style,
    titleStyle,
  } = props;

  return (
    <View
      style={[styles.container, style]}
    >
      <Text
        style={[styles.text, titleStyle]}
      >
        {status ? INDICATOR_STATUS.CONNECTED : INDICATOR_STATUS.DISCONNECTED}
      </Text>
    </View>
  );
};

export default Button;
