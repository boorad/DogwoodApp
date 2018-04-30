import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';

import {
  headerColor,
  primaryColor
} from 'common/styles/color';

import { Header } from 'common/header';
import { Champions } from 'features/history/champions';
import { Alumni } from 'features/history/alumni';
import { Story } from 'features/history/story';

export class HistoryScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderTabBar() {
    return (
      <ScrollableTabBar
        style={styles.tabContainer}
        underlineStyle={{backgroundColor: "yellow"}}
        renderTab={this._renderTab}
      />
    );
  }

  _renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    var st = [styles.tab, styles.histTab];
    if( isTabActive ) st.push(styles.activeTab);

    return (
      <TouchableHighlight
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={st}
      >
        <Text style={[styles.tabText]}>{name}</Text>
      </TouchableHighlight>
    );
  }

  _handleChangeTab({i, ref, from}) {}

  render() {
    let tabBarPosition = Platform.OS  === 'ios' ? 'bottom' : 'top';
    let content = (
      <ScrollableTabView
        initialPage={0}
        tabBarPosition={tabBarPosition}
        renderTabBar={() => this._renderTabBar()}
      >
        <Champions tabLabel="Past Champions" />
        <Alumni tabLabel="Alumni" />
        <Story tabLabel="Dogwood History" />
      </ScrollableTabView>
    );

    return (
      <View style={[styles.container]}>
        <Header />
        {content}
      </View>
    );
  }

};


const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    flex: 1
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
    height: 40,
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
  histTab: {
    width: 50,
    minWidth: 50
  },
  tabContainer: {
    backgroundColor: primaryColor,
    height: 40
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40
  },
  tabText: {
    color: "#eee",
    textAlign: 'center',
    fontSize: fontSize-2,
    fontFamily: fontFamily
  }
});
