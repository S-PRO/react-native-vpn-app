/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 14:23:40
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-12 14:33:05
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
import { TEXTS } from 'src/config/text.constants';
import IMAGES from 'src/config/image.constants';
import Image from 'src/components/common/image';
import Carusel from 'src/components/common/carusel';
import Button from 'src/components/common/button';
import CaruselItem from './caruselItem';

type _t_props = {
  onPress?: () => void,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
    paddingTop: 110,
    paddingBottom: 98,
    minHeight: HEIGHT,
    maxHeight: HEIGHT,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 379,
  },
});

const Onboarding = (props: _t_props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.box}>
          <Carusel
            items={TEXTS.ONBOARDING.SCREEN.CARUSEL_ITEMS
              .map(el => (
                <CaruselItem
                  key={el.id}
                  source={{
                    title: el.title,
                    text: el.text
                  }}
                  image={(
                    <Image
                      style={styles.logo}
                      source={IMAGES.LOGO}
                      resizeMode="contain"
                    />
                  )}
                />
              ))
            }
          />
          <Button
            onPress={onPress}
            title={TEXTS.ONBOARDING.SCREEN.STARTED_BUTTON.toUpperCase()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Onboarding;
