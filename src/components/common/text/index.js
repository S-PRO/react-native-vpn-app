/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 15:48:25
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 15:53:05
* @flow
*/

import * as React from 'react';

/* MODULES */
import { Text } from 'react-native';

type _t_props = {
  children?: React.Node,
};

const FCText = (props: _t_props) => {
  const { children } = props;
  return (
    <Text
      allowFontScaling={false}
      {...props}
    >
      {children}
    </Text>
  );
};

export default FCText;
