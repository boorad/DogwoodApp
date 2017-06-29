import React from 'react';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { Header } from './header';
import { Day } from './day';
import { styles } from '../styles/style';

const url = "https://api.druid.golf/dogwood/schedule";


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
        <Header
          label="Schedule"
          nav={this.props.navigation}
        />
        {title}
        {content}
      </View>
    );
  }

};
