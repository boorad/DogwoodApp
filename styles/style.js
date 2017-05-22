import { Platform, StyleSheet } from 'react-native';
import {
  primaryColor,
  headerColor
} from './color.js';

const fontFamily = 'HelveticaNeue';
const fontSize = 15;
const fontPad = 7;

export const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#000',
    marginVertical: 0
  },
  headerLogo: {
    height: 35,
    width: 35,
    marginTop: 1,
    marginLeft: 10
  },
  c: {
    textAlign: 'center'
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: primaryColor,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    paddingTop: 2,
    paddingLeft: 10,
    height: 40
  },
  headerText: {
    color: headerColor,
    lineHeight: 24,
    fontFamily: fontFamily,
    fontSize: fontSize + 3,
    paddingTop: 5
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
  },
  gglb: {
    margin: 0,
    padding: 0
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  titleText: {
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    color: headerColor
  },
  tab: {
    flex: 1,
    width: 50,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    backgroundColor: '#00b0d6'
  },
  tabContainer: {
    backgroundColor: primaryColor
  },
  tabText: {
    width: 50,
    minWidth: 50,
    color: "#eee",
    textAlign: 'center',
    fontSize: fontSize+2,
    fontFamily: fontFamily
  },
  tabContent: {
    backgroundColor: "#fff"
  },
  tabContentTitle: {
    fontSize: fontSize+2,
    fontFamily: fontFamily,
    color: "#333",
    textAlign: "center",
    padding: 10
  },
  eventContainer: {
    padding: 5
  },
  eventRow: {
    flexDirection: 'row',
    flex: 6
  },
  eventStart: {
    flex: 1,
    paddingTop: 3,
    fontSize: fontSize-2
  },
  eventEnd: {
    flex: 1,
    paddingTop: 3,
    fontSize: fontSize-2
  },
  eventDescr: {
    flex: 4,
    fontSize: fontSize+1,
    fontWeight: 'bold'
  },
  eventBlank: {
    flex: 2
  },
  eventNotes: {
    flex: 4,
    fontSize: fontSize+1
  },
  chSubTitle: {
    fontSize: fontSize-2,
    fontFamily: fontFamily,
    color: "#fff",
    flex: 7,
    paddingLeft: 10
  },
  chRow: {
    flexDirection: 'row',
    flex: 8
  },
  chYear: {
    flex: 1,
    fontSize: fontSize+1,
    color: "#fff",
    paddingLeft: 10
  },
  chName: {
    flex: 7,
    fontSize: fontSize+1,
    color: "#fff",
    paddingLeft: 10
  }
});
