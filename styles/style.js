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
    height: 55
  },
  headerHamburger: {
    paddingTop: 8,
    marginLeft: 10
  },
  headerLogo: {
    height: 50,
    width: 50,
    marginTop: 3,
    marginLeft: 20
  },
  headerText: {
    color: headerColor,
    lineHeight: 24,
    fontFamily: fontFamily,
    fontSize: fontSize + 4,
    paddingTop: 15
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
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: primaryColor
  },
  activeTab: {
    backgroundColor: '#00b0d6',
    borderColor: "yellow",
    borderBottomWidth: 4
  },
  tabContainer: {
    backgroundColor: primaryColor,
    height: 50
  },
  schTab: {
    width: 50,
    minWidth: 50
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 49
  },
  tabText: {
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
  },
  aboutContainer: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center'
  },
  aboutDILogo: {
    height: 125,
    width: 125
  },
  aboutDHGCLogo: {
    height: 125,
    width: 113,
    marginBottom: 10
  },
  aboutHosted: {
    marginTop: 10,
    marginBottom: 5
  },
  aboutVersion: {
    marginTop: 10
  },
  aboutBy: {
    marginTop: 5,
    color: "blue"
  }

});
