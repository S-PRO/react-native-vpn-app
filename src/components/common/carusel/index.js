/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 15:18:21
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 19:03:58
* @flow
*/

import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import Swiper from 'react-native-swiper';

type _t_props = {
  items?: React.Node[],
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0,
    marginBottom: 40,
  },
  paginationStyle: {
    bottom: 0,
  },
  dotStyle: {
    backgroundColor: COLORS.regentGray,
    opacity: 0.3,
  },
  activeDotStyle: {
    backgroundColor: COLORS.regentGray,
    opacity: 1,
  },
});

const Carusel = (props: _t_props) => {
  const {
    items,
  } = props;
  return (
    <Swiper
      containerStyle={styles.containerStyle}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      paginationStyle={styles.paginationStyle}
    >
      {items}
    </Swiper>
  );
};

export default Carusel;
