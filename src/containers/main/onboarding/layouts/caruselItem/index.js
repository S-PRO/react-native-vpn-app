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
  image: any;
  source: {
    title: string;
    text: string;
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  textsContainer: {
    width: 255,
    height: 136,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.midnight,
    fontFamily: FONTS.SF_Pro_Display_Semibold,
    fontSize: 20,
  },
  text: {
    color: COLORS.osloGray,
    fontFamily: FONTS.SF_Pro_Display_Regular,
    fontSize: 13,
    textAlign: 'center',
    flex: 1,
    marginTop: 12,
    marginBottom: 14,
  },
});

const CaruselItem = (props: _t_props) => {
  const {
    source,
    image,
  } = props;
  return (
    <View style={styles.container}>
      {image}
      <View style={styles.textsContainer}>
        <Text
          style={styles.title}
          numberOfLines={1}
        >
          {source.title}
        </Text>
        <Text
          style={styles.text}
          numberOfLines={5}
        >
          {source.text}
        </Text>
      </View>
    </View>
  );
};

export default CaruselItem;
