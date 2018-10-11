/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 11:49:48
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 12:05:56
* @flow
*/
import * as React from 'react';
import { NavigationActions } from 'react-navigation';

type _t_route = {
  key: string,
  routeName: string,
  params: ?Object,
};

type _t_navigator = {
  dispatch: Function,
  state: {
    nav: {
      routes: Array<_t_route>,
      index: number,
      isTransitioning: boolean,
      key: string,
    },
  }
};

// LIST OF ROUTES PER TYPE
// const ROUTES = { // eslint-disable-line
//   MAIN_ROUTS: [
//     "Onboarding",
//     "HomeConnected",
//     "HomeDisconnected",
//     "ServerList",
//   ]
// };

let _navigator: _t_navigator;

const setTopLevelNavigator = (navigatorRef: _t_navigator) => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params?: Object) => {
  const action = NavigationActions.navigate({
    routeName,
    params,
  });
  _navigator.dispatch(action);
};

const goBack = () => {
  const action = NavigationActions.back({});
  _navigator.dispatch(action);
};

const getCurrentSceneParams = () => {
  if (_navigator && _navigator.state && _navigator.state.nav && _navigator.state.nav.routes) {
    const { routes, index } = _navigator.state.nav;
    const currentRoute = routes[index];

    return currentRoute.params || {};
  }

  return {};
};

const methods = {
  navigate,
  goBack,
  setTopLevelNavigator,
  getCurrentSceneParams,
};

const wrapper = (Item: Class<React$Component<*, *>>) => (props: Object) => <Item {...props} ACLNavigation={methods} />;

export {
  navigate,
  goBack,
  setTopLevelNavigator,
  wrapper
};
