import { Platform, StyleSheet } from 'react-native';
import {
  primaryColor,
  headerColor
} from './color.js';

export const styles = StyleSheet.create({
  headerLogo: {
    height: 22,
    width: 29,
    marginTop: 2,
    marginLeft: 10
  },
  c: {
    textAlign: 'center'
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: primaryColor
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 10
  },
  headerText: {
    color: headerColor,
    lineHeight: 24
  },
  lbSelect: {
    marginLeft: 15
  }
});
