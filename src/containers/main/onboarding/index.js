/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 12:13:09
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 14:28:30
* @flow
*/

import React, { Component } from 'react';
import type { _t_navigation } from 'src/flow.types/navigation';
import Layouts from './layouts';

type _t_props = {
  navigation: _t_navigation,
};

type _t_state = {
};

export default class Logic extends Component<_t_props, _t_state> {

  onGetStarted = () => {
    const { navigation } = this.props;
    navigation.navigate("HomeConnected");
  }

  render() {
    return (
      <Layouts onPress={this.onGetStarted} />
    );
  }
}
