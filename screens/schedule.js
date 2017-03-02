import React from 'react';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimerMixin from 'react-timer-mixin';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import { styles } from '../styles/style';


const Day = React.createClass({
  render() {
    const i = this.props.i;
    const day = this.props.day;

    return(
      <ScrollView>
        <Text
          key={i}
          style={[styles.tabText]}
        >
          {day.longdate}
        </Text>
      </ScrollView>
    );
  }
});


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

  _handleChangeTab({i, ref, from}) {

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
        underlayColor="#aaaaaa"
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
            <ScrollableTabBar
              style={styles.tabContainer}
              renderTab={this._renderTab}
            />
          }
          onChangeTab={this._handleChangeTab}
        >
          {days.map((day, i) => {
             var label = day.dow + '\n' + day.shortdate;
             return (
               <Day
                 tabLabel={label}
                 i={i}
                 key={i}
                 day={day}
               />
             );
           })}
        </ScrollableTabView>
      </View>
    );
  }
};
