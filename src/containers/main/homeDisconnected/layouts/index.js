/*
* @Author: Volynets Serhii
* @Date: 2018-10-12 13:52:34
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-12 16:23:03
* @flow
*/
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import { HEIGHT } from 'src/assets/styles/dimensions';
import IMAGES from 'src/config/image.constants';
import SERVERS from 'src/config/servers.constants';
import { TEXTS } from 'src/config/text.constants';
import Image from 'src/components/common/image';
import Button from 'src/components/common/button';
import Header from 'src/components/common/header';
import ServersSelector from 'src/components/common/serversSelector';
import ConnectionIndicator from 'src/components/common/connectionIndicator';

type _t_props = {
  onPress?: () => void,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
    minHeight: HEIGHT,
    maxHeight: HEIGHT,
  },
  header: {
    marginTop: 52,
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
  const { onPress } = props;
  return (
    <View style={styles.container}>
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
          server={SERVERS.UNITED_STATES}
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

export default HomeDisconnected;
