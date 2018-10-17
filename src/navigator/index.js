/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 11:33:41
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-12 16:40:31
* @flow
*/

import React from 'react';
import { Keyboard } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import Logger from 'src/utils/logger';
import ROUTES from './routes';

const getActiveRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

export const initialRouteName = "Onboarding";

export default class Navigator extends React.Component<*, *> {
  initRouter = () => createStackNavigator(
    ROUTES, {
      initialRouteName,
      cardStyle: {
        shadowColor: "transparent",
      },
      navigationOptions: {
        gesturesEnabled: false,
      },
    }
  );

  render() {
    const RootNavigator = this.initRouter();
    return (
      <RootNavigator
        ref={(ref) => {
          if (ref) {
            NavigationActions.navigate(ref);
          }
        }}
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getActiveRouteName(currentState);
          const prevScreen = getActiveRouteName(prevState);
          if (!!currentScreen && prevScreen !== currentScreen) {
            Logger("LOG ROUTING HERE");
            Keyboard.dismiss();
          }
        }}
      />
    );
  }
}
