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
import { find } from 'lodash';

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


const url = `${baseUrl}/golfgenius`;

const years = ['2018', '2017'];

const tourneys = [
  {id: 'q', key: 'qualifier', label:'Qualifier'},
  {id: 'a', key: 'am-am', label:'Am-Am'},
  {id: 't', key: 'tournament', label:'Tournament'}
];

export class ScoresTees extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 'lb',
      year: '2018',
      tourney: 't'
    };
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
    const type = find(tourneys, {id: this.state.tourney}).key;
    this.setState((prevState, props) => {
      prevState.data = data;
      prevState.tt = find(data, {year: this.state.year})[type].teetimes;
      prevState.lb = find(data, {year: this.state.year})[type].leaderboard;
      return prevState;
    });
  }

  componentWillMount() {
    this._fetchData();
  }

  shouldComponentUpdate
  _setYear(year) {
    const type = find(tourneys, {id: this.state.tourney}).key;
    this.setState((prevState, props) => {
      prevState.year = year;
      prevState.tt = find(this.state.data, {year: year})[type].teetimes;
      prevState.lb = find(this.state.data, {year: year})[type].leaderboard;
      return prevState;
    });
  }

  _setTourney(tourney) {
    const type = find(tourneys, {id: tourney}).key;
    this.setState((prevState, props) => {
      prevState.tourney = tourney;
      prevState.tt = find(this.state.data, {year: this.state.year})[type].teetimes;
      prevState.lb = find(this.state.data, {year: this.state.year})[type].leaderboard;
      return prevState;
    });
    this.setState((prevState, props) => {
      return prevState;
    });
  }

  _renderHdr(label) {
    const yearOptions = years.map(y => (
      <MenuOption
        onSelect={() => this._setYear(y)}
        text={y}
        key={y}
      />
    ));

    const tourneyOptions = tourneys.map(t => (
      <MenuOption
        onSelect={() => this._setTourney(t.id)}
        text={t.label}
        key={t.id}
      />
    ));

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
            <MenuOptions
              customStyles={{optionsContainer: styles.optionsContainer}}
            >
              {yearOptions}
              <View style={{borderBottomColor: '#999',borderBottomWidth:1}} />
              {tourneyOptions}
            </MenuOptions>
          </Menu>
        </View>
      </View>
    );
  }

  render() {
    let hdr = null;
    let gg = null;

    if( this.state &&
        (this.state.tt !== undefined) &&
        (this.state.lb !== undefined) &&
        this.state.tourney &&
        this.state.year) {
      let label = find(tourneys, {id: this.state.tourney}).label;
      hdr = this._renderHdr(this.state.year + ' ' + label);

      gg = (
        <View style={styles.gg}>
          <GolfGenius
            gg_num={this.state.lb}
            type={this.state.page}
          />
        </View>
      );
    } else {
      gg = (
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
  },
  optionsContainer: {
    width: '40%'
  }
});
