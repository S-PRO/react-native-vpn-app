/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 12:13:09
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 14:28:30
* @flow
*/

import React, { Component } from 'react';

// import { TEXTS, BLOOD_GROUPS } from 'src/config/text.constants';
import type { _t_acl_navigation } from 'src/flow.types/navigation';
import Layouts from './layouts';

type _t_props = {
  ACLNavigation: _t_acl_navigation,
};

type _t_state = {
};

export default class Logic extends Component<_t_props, _t_state> {
  state = {
  };

  onSubmit = () => {}

  goBack = () => {
    const { ACLNavigation } = this.props;
    ACLNavigation.goBack();
  }

  render() {
    return (
      <Layouts />
    );
  }
}
