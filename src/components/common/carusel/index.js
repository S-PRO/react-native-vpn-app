/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 15:18:21
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 19:03:58
* @flow
*/

import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import type { _t_styles } from 'src/flow.types/reactElements';
import CircleIndicator from './circleIndicator';

type _t_props = {
  style?: _t_styles,
  items?: React.Node[],
};

type _t_state = {
  pageNumber: number,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

class Carusel extends React.Component <_t_props, _t_state> {
  state = {
    pageNumber: 2,
  };

  render() {
    const {
      items,
      style
    } = this.props;

    const {
      pageNumber
    } = this.state;
    return (
      <View
        style={[styles.container, style]}
      >
        {items && items[pageNumber]}
        <View style={styles.buttonsContainer}>
          {items && items.map((el, index) => <CircleIndicator key={index.toString()} primary={pageNumber === index} />)}
        </View>
      </View>
    );
  }
}

export default Carusel;
