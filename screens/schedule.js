import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { Day } from './day';
import { styles } from '../styles/style';

const url = "https://api.druid.golf/dogwood/schedule";


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
    this.children = [];
  }

  async _fetchData() {
    try {
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

  _handleChangeTab({i, ref, from}) {}

  render() {
    const { navigate } = this.props.navigation;
    var title, content;

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
        <View style={styles.header}>
          <Icon name="menu"
            size={24}
            color="#fff"
            onPress={() => navigate('DrawerOpen')} />
          <Image
            source={require('../img/dogwood-logo.png')}
            style={styles.headerLogo}
          />
          <Text style={[styles.headerText, styles.lbSelect]}>Schedule</Text>
        </View>
        {title}
        {content}
      </View>
    );
  }

};
