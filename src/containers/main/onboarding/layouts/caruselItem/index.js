/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 17:33:37
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 19:06:01
* @flow
*/
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import Text from 'src/components/common/text';

type _t_props = {
  title: string;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.midnight,
    fontFamily: FONTS.SF_Pro_Display_Semibold,
    fontSize: 20,
  },
  text: {
    paddingTop: 12,
    color: COLORS.osloGray,
    fontFamily: FONTS.SF_Pro_Display_Regular,
    fontSize: 13,
    textAlign: 'center',
  },
});

const CaruselItem = (props: _t_props) => {
  const {
    title,
    text,
  } = props;
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text
        style={styles.text}
        numberOfLines={4}
      >
        {text}
      </Text>
    </View>
  );
};

export default CaruselItem;
