import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { Header } from './header';
import { GolfGenius } from './golfgenius';
import { styles } from '../styles/style';

const url = "https://api.druid.golf/dogwood/config";


export class ScoresTees extends React.Component {

  constructor(props) {
    super(props);
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
    const { type } = this.props;

    this.setState((prevState, props) => {
      prevState.tt = data[type].teetimes;
      prevState.lb = data[type].leaderboard;
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
    var content;

    if( this.state && this.state.tt && this.state.lb ) {

      content = (
        <ScrollableTabView
          renderTabBar={() =>
            <ScrollableTabBar
              style={styles.tabContainer}
              underlineStyle={{backgroundColor: "yellow"}}
              renderTab={this._renderTab} />
                       }>
          <GolfGenius
            gg_num={this.state.lb}
            type="leaderboard"
            tabLabel="Leaderboard"
          />
          <GolfGenius
            gg_num={this.state.tt}
            type="teetime"
            tabLabel="Tee Times"
          />
        </ScrollableTabView>
      );
    } else {
      content = (
        <Text>Loading...</Text>
      );
    }

    return content;
  }

};
