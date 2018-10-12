/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 11:40:34
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 19:14:27
* @flow
*/

function logger(...args: Array<*>) {
  if (__DEV__) { // eslint-disable-line
    console.log(...args); // eslint-disable-line
  }
}

export default logger;
