import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { GolfGenius } from './golfgenius';
import {
  headerColor,
  primaryColor
} from 'common/styles/color';
import {
  fontFamily,
  fontSize
} from 'common/styles/style';

import { baseUrl } from 'common/config';


const url = `${baseUrl}/config`;

export class ScoresTees extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 'lb'};
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

  _setYear(year) {
    console.log(year);
  }

  _setTourney(tourney) {
    console.log(tourney);
  }

  _renderHdr(label) {
    return (
      <View style={styles.hdr}>
        <View style={styles.hdrLabel}>
          <Text style={styles.hdrLabelText}>{label}</Text>
        </View>
        <View style={styles.hdrMore}>
          <Menu>
            <MenuTrigger>
              <Icon
                size={24}
                color='#eee'
                name='dots-vertical'
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => this._setYear('2018')} text='2018' />
              <MenuOption onSelect={() => this._setYear('2017')} text='2017' />
              <View style={{borderBottomColor: '#999',borderBottomWidth:1}} />
              <MenuOption
                onSelect={() => this._setTourney('q')} text='Qualifier' />
              <MenuOption
                onSelect={() => this._setTourney('a')} text='Am-Am' />
              <MenuOption
                onSelect={() => this._setTourney('t')} text='Tournament' />
            </MenuOptions>
          </Menu>
        </View>
      </View>
    );
  }

  render() {
    let hdr = null;
    let gg = null;

    if( this.state && this.state.tt && this.state.lb ) {

      hdr = this._renderHdr(this.props.label);

      if( this.state.page === 'lb' ) {
        gg = (
          <View style={styles.gg}>
            <GolfGenius
              gg_num={this.state.lb}
              type="leaderboard"
            />
          </View>
        );
      }

      if( this.state.page === 'tt' ) {
        gg = (
          <View style={styles.gg}>
            <GolfGenius
              gg_num={this.state.tt}
              type="teetime"
            />
          </View>
        );
      }

    } else {
      content = (
        <Text>Loading...</Text>
      );
    }

    return (
      <View style={styles.container}>
        {hdr}
        {gg}
      </View>
    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hdr: {
  },
  hdrLabel: {
    alignItems: 'center'
  },
  hdrMore: {
    position: 'absolute',
    right: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  hdrLabelText: {
    color: "#eee",
    textAlign: 'center',
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    paddingTop: 10,
    paddingBottom: 10
  },
  gg: {
    flex: 1
  }
});
