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
import IMAGES from 'src/config/image.constants';
import { HEIGHT } from 'src/assets/styles/dimensions';
import { TEXTS } from 'src/config/text.constants';
import KeyboardWrapper from 'src/components/common/keyboardWrapper';
import Image from 'src/components/common/image';
import Button from 'src/components/common/button';
import Header from 'src/components/common/header';
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
    justifyContent: 'space-between',
  },
  connectedImage: {
    width: 180,
    height: 180,
  },
  connectedButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.scorpion,
  },
  connectedButtonText: {
    color: COLORS.midnight,
  },
});

const Onboarding = (props: _t_props) => {
  const { onPress } = props;
  return (
    <KeyboardWrapper style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
      >
        <Header
          style={styles.header}
          title={TEXTS.HOME_CONNECTED.HEADER.TITLE}
          leftIconName="ios-menu"
          leftIconColor={COLORS.astronautBlue}
          onLeftIconPress={() => {}}
        />
        <View style={styles.mainLayer}>
          <ConnectionIndicator
            status
          />
          <Image
            style={styles.connectedImage}
            source={IMAGES.CONNECTED}
            resizeMode="contain"
          />
          <Button
            onPress={onPress}
            style={styles.connectedButton}
            titleStyle={styles.connectedButtonText}
            title={TEXTS.HOME_CONNECTED.SCREEN.DISCONNECT_BUTTON.toUpperCase()}
          />
        </View>
      </ScrollView>
    </KeyboardWrapper>
  );
};

export default Onboarding;
