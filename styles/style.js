import { Platform, StyleSheet } from 'react-native';
import {
  primaryColor,
  headerColor
} from './color.js';

export const styles = StyleSheet.create({
  headerLogo: {
    height: 25,
    width: 35,
    marginTop: 1,
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
    paddingTop: 2,
    paddingLeft: 10,
    height: 32
  },
  headerText: {
    color: headerColor,
    lineHeight: 24
  },
  lbSelect: {
    marginLeft: 15
  },
  lbRow: {
    flexDirection: 'row'
  },
  lbExpanded: {
    flexDirection: 'row'
  },
  lbCell: {
    flex: 1,
    flexWrap: 'nowrap',
    textAlign: 'center',
    backgroundColor: '#eee',
    borderColor: '#aaa',
    borderWidth: 0.5,
    padding: 5
  },
  lbCellName: {
    flex: 5,
    alignSelf: 'stretch',
    flexWrap: 'nowrap',
    backgroundColor: '#eee',
    borderColor: '#aaa',
    borderWidth: 0.5,
    padding: 5
  },
  lbCellTot: {
    flex: 2
  }
});
