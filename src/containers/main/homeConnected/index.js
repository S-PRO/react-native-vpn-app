/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 12:13:09
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-17 09:58:15
* @flow
*/
import React, { Component } from 'react';
import type { _t_navigation } from 'src/flow.types/navigation';
import type { _t_server } from 'src/flow.types/servers';
import SERVERS from 'src/config/servers.constants';
import Layouts from './layouts';

type _t_props = {
  navigation: _t_navigation,
};

type _t_state = {
  selectedServer: _t_server,
  modalVisible: boolean,
};

export default class Logic extends Component<_t_props, _t_state> {
  state = {
    selectedServer: SERVERS.UNITED_STATES,
    modalVisible: false,
  }

  onDisconect = () => {
    const { navigation } = this.props;
    navigation.navigate("HomeDisconnected");
  }

  onServerClick = () => {
    this.setState({
      modalVisible: true,
    });
  }

  onServerSelect = (selectedServer: _t_server) => {
    this.setState({
      selectedServer,
      modalVisible: false,
    });
  }

  render() {
    const {
      selectedServer,
      modalVisible,
    } = this.state;

    return (
      <Layouts
        onPress={this.onDisconect}
        onServerClick={this.onServerClick}
        onServerSelect={this.onServerSelect}
        modalVisible={modalVisible}
        selectedServer={selectedServer}
      />
    );
  }
}
