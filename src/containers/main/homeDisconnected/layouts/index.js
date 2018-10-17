/*
* @Author: Volynets Serhii
* @Date: 2018-10-12 13:52:34
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-17 10:35:05
* @flow
*/
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import type { _t_server } from 'src/flow.types/servers';
import COLORS from 'src/assets/styles/colors';
import { HEIGHT } from 'src/assets/styles/dimensions';
import IMAGES from 'src/config/image.constants';
import { TEXTS } from 'src/config/text.constants';
import Image from 'src/components/common/image';
import Button from 'src/components/common/button';
import Header from 'src/components/common/header';
import ServersSelector from 'src/components/common/serversSelector';
import ConnectionIndicator from 'src/components/common/connectionIndicator';
import ModalServerList from 'src/components/modalServerList';

type _t_props = {
  onPress?: () => void,
  onServerClick?: () => void,
  onServerSelect?: (selectedServer: _t_server) => void,
  selectedServer: _t_server,
  modalVisible: boolean,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  modalBG: {
    width: '100%',
    height: Platform.OS === 'ios' ? HEIGHT : HEIGHT - 24,
    position: "absolute",
    backgroundColor: COLORS.midnight,
    opacity: 0.1,
  },
  contentContainer: {
    minHeight: Platform.OS === 'ios' ? HEIGHT : HEIGHT - 24,
    maxHeight: Platform.OS === 'ios' ? HEIGHT : HEIGHT - 24,
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 52 : 22,
  },
  mainLayer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 140,
  },
  connectedImage: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 30,
  },
});

const HomeDisconnected = (props: _t_props) => {
  const {
    onPress,
    onServerClick,
    onServerSelect,
    selectedServer,
    modalVisible,
  } = props;

  return (
    <View style={styles.container}>
      <ModalServerList
        visible={modalVisible}
        selectedServer={selectedServer}
        onServerSelect={onServerSelect}
      />
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
      >
        <Header
          style={styles.header}
          title={TEXTS.HOME_DISCONNECTED.HEADER.TITLE}
          leftIconName="ios-menu"
          leftIconColor={COLORS.astronautBlue}
          onLeftIconPress={() => {}}
        />
        <View style={styles.mainLayer}>
          <ConnectionIndicator
            style={styles.indicator}
            status={false}
          />
          <Image
            style={styles.connectedImage}
            source={IMAGES.DISCONNECTED}
            resizeMode="contain"
          />
          <Button
            onPress={onPress}
            title={TEXTS.HOME_DISCONNECTED.SCREEN.CONNECT_BUTTON.toUpperCase()}
          />
        </View>
        <ServersSelector
          server={selectedServer}
          onPress={onServerClick}
        />
      </ScrollView>
      {modalVisible && <View style={styles.modalBG} />}
    </View>
  );
};

export default HomeDisconnected;
