import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { Header } from './header';
import { GolfGenius } from './golfgenius';
import { styles } from '../styles/style';

const url = "https://api.druid.golf/dogwood/config";


export class ScoresTees extends React.Component {

  constructor(props) {
    super(props);
    this.state = { "page": "lb" };
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

  _switch(page) {
      this.setState((prevState, props) => {
        prevState.page = page;
        return prevState;
      });
  }

  _renderTab(name, page, isTabActive) {
    var st = [styles.tab];
    if( isTabActive ) st.push(styles.activeTab);

    return (
      <TouchableHighlight
        onPress={() => this._switch(page)}
        style={st}
      >
        <Text style={[styles.tabText]}>{name}</Text>
      </TouchableHighlight>
    );
  }

  _renderTabs() {
    return (
      <View
        style={[styles.tabRow]}
      >
        { this._renderTab("Leaderboard", "lb", this.state.page === "lb") }
        { this._renderTab("Tee Times", "tt", this.state.page === "tt") }
      </View>
    );
  }

  render() {
    var tabs = null;
    var lb = null;
    var tt = null;

    if( this.state && this.state.tt && this.state.lb ) {

      tabs = this._renderTabs();

      if( this.state.page === 'lb' ) {
        lb = (
          <GolfGenius
            gg_num={this.state.lb}
            type="leaderboard"
            tabLabel="Leaderboard"
          />
        );
      }

      if( this.state.page === 'tt' ) {
        tt = (
          <GolfGenius
            gg_num={this.state.tt}
            type="teetime"
            tabLabel="Tee Times"
          />
        );
      }

    } else {
      content = (
        <Text>Loading...</Text>
      );
    }

    return (
      <View style={{flex:1}}>
        {tabs}
        {lb}
        {tt}
      </View>
    );
  }

};
