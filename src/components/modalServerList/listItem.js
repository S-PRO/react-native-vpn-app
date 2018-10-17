/*
* @Author: Volynets Serhii
* @Date: 2018-10-16 19:09:55
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-17 11:39:12
* @flow
*/

import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import type { _t_server } from 'src/flow.types/servers';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import ICON_TYPES from '../common/icon';
import Text from '../common/text';

type _t_props = {
  server: _t_server,
  selected: boolean,
  onServerSelect?: (selectedServer: _t_server) => void,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",

  },
  serverBox: {
    flexDirection: "row",
    height: 20,
    marginBottom: 30,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 30,
  },
  text: {
    marginLeft: 20,
    color: COLORS.midnight,
    fontFamily: FONTS.SF_Pro_Display_Regular,
    fontSize: 16,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.altoLight,
    backgroundColor: COLORS.white,
    marginRight: 30,
  },
  selectedCheckIcon: {
    marginRight: 30,
  }
});

const ListItem = (props: _t_props) => {
  const {
    server,
    selected,
    onServerSelect,
  } = props;
  const iconType = "ionicons";
  const SelectedIconComponents = ICON_TYPES[iconType];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onServerSelect}
    >
      <View style={styles.serverBox}>
        <Image
          style={styles.icon}
          source={server.ICON}
        />
        <Text style={styles.text}>
          {server.TITLE}
        </Text>
      </View>
      {selected
        ? (
          <SelectedIconComponents
            size={24}
            name="ios-checkmark-circle"
            style={styles.selectedCheckIcon}
            color={COLORS.dodgerBlue}
          />
        ) : <View style={styles.checkCircle} />
      }
    </TouchableOpacity>
  );
};

export default ListItem;
