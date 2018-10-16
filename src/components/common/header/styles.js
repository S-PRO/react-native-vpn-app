/*
* @Author: Volynets Serhii
* @Date: 2018-10-12 14:50:55
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-12 15:56:56
* @flow
*/
import { StyleSheet } from 'react-native';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 44,
    backgroundColor: COLORS.white,
  },
  leftCol: {
    flex: 0.2,
    paddingLeft: 16,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  leftColText: {
    color: COLORS.midnight,
    fontSize: 15,
    fontFamily: FONTS.SF_Pro_Display_Medium,
  },
  centerCol: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  centerColText: {
    color: COLORS.midnight,
    fontSize: 17,
    fontFamily: FONTS.SF_Pro_Display_Medium,
  },
  rightCol: {
    flex: 0.2,
    paddingRight: 16,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rightColText: {
    color: COLORS.midnight,
    fontSize: 15,
    fontFamily: FONTS.SF_Pro_Display_Medium,
  },
});

export default styles;
