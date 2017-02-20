import { Platform, StyleSheet } from 'react-native';
import {
  primaryColor,
  headerColor
} from './color.js';

export const styles = StyleSheet.create({
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
