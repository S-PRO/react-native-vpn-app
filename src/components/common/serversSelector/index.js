/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 15:40:20
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 17:22:12
* @flow
*/
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import type { _t_styles } from 'src/flow.types/reactElements';
import ICON_TYPES from '../icon';
import Text from '../text';

type _t_props = {
  onPress: ?Function,
  titleStyle?: _t_styles,
  server: {
    TITLE: string,
    ICON: string,
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
    backgroundColor: COLORS.whiteDark,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontFamily: FONTS.SF_Pro_Display_Regular,
    fontSize: 16,
    color: COLORS.midnight,
    marginRight: 10,
    marginLeft: 20,
  },
});

const ServersSelector = (props: _t_props) => {
  const {
    onPress,
    titleStyle,
    server,
  } = props;

  const iconType = "ionicons";
  const IconComponent = ICON_TYPES[iconType];
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => onPress && onPress()}
    >
      <Image
        style={styles.icon}
        source={server.ICON}
      />
      <Text
        style={[styles.text, titleStyle]}
      >
        {server.TITLE}
      </Text>
      <IconComponent
        size={12}
        name="ios-arrow-down"
        color={COLORS.black}
      />
    </TouchableOpacity>
  );
};

export default ServersSelector;
