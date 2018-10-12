/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 14:25:48
* @Last Modified by: Volynets Serhii
* @Last Modified time: 2018-10-11 14:25:48
* @flow
*/

export type _t_navigation = {
  openDrawer: () => void,
  navigate: (route: string, params: ?(string | number | Object | Array<*> | boolean)) => void,
  goBack: () => void,
  getParam: Function,
  pop: Function,
  setParams: Function,
  closeDrawer: Function,
  isFocused: Function,
  state: {
    routeName: string,
    key: string,
    params: { [string]: any }
  }
};
