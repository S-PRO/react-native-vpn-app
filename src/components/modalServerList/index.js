/*
* @Author: Volynets Serhii
* @Date: 2018-10-16 15:09:27
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-17 10:42:26
* @flow
*/
import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import type { _t_server } from 'src/flow.types/servers';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import { TEXTS } from 'src/config/text.constants';
import SERVERS from 'src/config/servers.constants';
import Text from '../common/text';
import ListItem from './listItem';

type _t_props = {
  visible: boolean,
  selectedServer?: _t_server,
  onServerSelect?: (selectedServer: _t_server) => void,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: null,
  },
  serversBox: {
    width: '100%',
    height: 460,
    backgroundColor: COLORS.whiteDark,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: COLORS.osloGray,
    fontFamily: FONTS.SF_Pro_Display_Medium,
    fontSize: 13,
    height: 20,
    marginTop: 20,
  }
});

const ModalServerList = (props: _t_props) => {
  const {
    visible,
    selectedServer,
    onServerSelect,
  } = props;

  const selectedServerTitle = selectedServer ? selectedServer.TITLE : null;
  const getlist = () => (
    Object.keys(SERVERS)
      .map(key => (
        <ListItem
          server={SERVERS[key]}
          key={key}
          selected={(selectedServerTitle === SERVERS[key].TITLE)}
          onServerSelect={() => onServerSelect && onServerSelect(SERVERS[key])}
        />
      ))
  );

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => onServerSelect && selectedServer && onServerSelect(selectedServer)}
    >
      <View style={styles.container} />
      <View style={styles.serversBox}>
        <Text style={styles.headerText}>
          {TEXTS.SERVERS_LIST.HEADER.TITLE}
        </Text>
        {getlist()}
      </View>
    </Modal>
  );
};

export default ModalServerList;
