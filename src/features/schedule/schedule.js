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
import { Day } from './day';
import { baseUrl } from 'common/config';


const url = `${baseUrl}/schedule`;

export class ScheduleScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Schedule of Events',
      icon: ({tintColor}) => (
        <Icon
          name="timetable"
          size={20}
          color={tintColor}
        />
      )
    })
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  async _fetchData() {
    try {
      console.log('url', url);
      let response = await fetch(url);
      let responseJson = await response.json();
      this._updateData(responseJson);
    } catch(error) {
      console.error(error);
    }

  }

  _updateData(data) {
    this.setState((prevState, props) => {
      prevState.data = data;
      return prevState;
    });
  }

  componentWillMount() {
    this._fetchData();
  }

  _renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    var st = [styles.tab, styles.schTab];
    if( isTabActive ) st.push(styles.activeTab);

    return (
      <TouchableHighlight
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={st}
      >
        <Text style={[styles.schTab, styles.tabText]}>{name}</Text>
      </TouchableHighlight>
    );
  }

  _handleChangeTab({i, ref, from}) {}

  render() {
    var title, content;

    let tabBarPosition = Platform.OS  === 'ios' ? 'bottom' : 'top';

    if( this.state && this.state.data ) {
      const { year, days } = this.state.data;
      title = (
        <View style={[styles.title]}>
          <Text style={[styles.titleText]}>
            {year} Dogwood Invitational Week
          </Text>
        </View>
      );
      content = (
        <ScrollableTabView
          initialPage={0}
          tabBarPosition={tabBarPosition}
          renderTabBar={ () =>
            <ScrollableTabBar
              style={styles.tabContainer}
              underlineStyle={{backgroundColor: "yellow"}}
              renderTab={this._renderTab} />
                       }>
          {days.map((day, i) => {
             var label = day.dow + '\n' + day.shortdate;
             return (
               <Day
                 tabLabel={label}
                 i={i}
                 key={i}
                 day={day}
               />);
           })}
        </ScrollableTabView>
      );
    } else {
      title = <Text>Dogwood Invitational Week</Text>;
      content = (
        <Text>Loading...</Text>
      );
    }

    return (
      <View style={[styles.container]}>
        <Header
          label="Schedule"
        />
        {title}
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
  }
});
