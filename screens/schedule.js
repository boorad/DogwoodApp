import React from 'react';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import { styles } from '../styles/style';


class Day extends React.Component {
  render() {
    const { i, day } = this.props;

    return(
      <Text
        key={i}
        style={[styles.tabContentText]}
      >
        {day.longdate}
      </Text>
    );
  }
}


export class ScheduleScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Schedule',
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
    this.state = {
      data: {}
    };
    this.children = [];
  }

  _fetchData() {
    // for DEV, just load this file:
    var d = require('../data/schedule_2017.json');
    this._updateData(d);
  }

  _updateData(data) {
    this.setState({ data: data });
  }

  componentWillMount() {
    this._fetchData();
  }

  _renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    var st = [styles.tab];
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

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    const { year, days } = this.state.data;

    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Icon name="menu"
            size={24}
            color="#fff"
            onPress={() => navigate('DrawerOpen')} />
          <Text style={[styles.headerText, styles.lbSelect]}>Schedule</Text>
        </View>
        <View style={[styles.title]}>
          <Text style={[styles.titleText]}>
            {year} Dogwood Invitational Week
          </Text>
        </View>
        <ScrollableTabView
          renderTabBar={() =>
            <DefaultTabBar
              style={styles.tabContainer}
              underlineStyle={{backgroundColor: "yellow"}}
              renderTab={this._renderTab}
            />
          }
        >
          {days.map((day, i) => {
             var label = day.dow + '\n' + day.shortdate;
             return <Day
                      ref={(ref) => (this.children[i] = ref)}
                      tabLabel={label}
                      i={i}
                      key={i}
                      day={day}
                    />;
           })}
        </ScrollableTabView>
      </View>
    );
  }
};
