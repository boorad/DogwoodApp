import { Platform, StyleSheet } from 'react-native';
import {
  primaryColor,
  headerColor
} from './color.js';

const fontFamily = 'HelveticaNeue';
const fontSize = 13;
const fontPad = 7;

export const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#000',
    marginVertical: 0
  },
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
    lineHeight: 24,
    fontFamily: fontFamily
  },
  lbSelect: {
    marginLeft: 15
  },
  lbRow: {
    flexDirection: 'row'
  },
  lbHead: {
    textAlign: 'center',
    fontSize: 9,
    fontFamily: fontFamily,
    backgroundColor: "#ccc",
    borderColor: "#333",
    paddingBottom: 0
  },
  lbHeadName: {
    textAlign: 'left'
  },
  lbData: {
    textAlign: 'center',
    fontSize: fontSize,
    fontFamily: fontFamily
  },
  lbExpanded: {
    flexDirection: 'row'
  },
  lbCell: {
    flex: 1,
    flexWrap: 'nowrap',
    backgroundColor: '#eee',
    borderColor: '#aaa',
    borderWidth: 0.5,
    padding: fontPad
  },
  lbCellName: {
    flex: 5,
    textAlign: 'left',
    alignSelf: 'stretch',
    flexWrap: 'nowrap',
    backgroundColor: '#eee',
    borderColor: '#aaa',
    borderWidth: 0.5,
    padding: fontPad
  },
  lbCellTot: {
    flex: 2
  }

});
