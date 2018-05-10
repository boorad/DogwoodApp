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
    let { y, t } = this._initialYearTourney();
    this.state = {
      data: [],
      page: 'lb',
      year: y,
      tourney: t
    };
  }

  // TODO: this is hardcoded as fuck
  //       get tournament dates and maybe use month and date below, plus math
  _initialYearTourney() {
    const now = new Date();
    const year = now.getUTCFullYear();
    //const month = now.getUTCMonth();
    //const date = now.getUTCDate();

    let y = year;
    let t = 't';

    if( now < new Date(2018, 5, 4, 12, 0, 0) ) {
      y = 2017;
    } else if( now < new Date(2018, 5, 5, 12, 0, 0)) {
      t = 'q';
    } else if( now < new Date(2018, 5, 6, 12, 0, 0)) {
      t = 'a';
    }
    return {y: y.toString(), t: t};
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
    console.log('data', data, 'type', type, 'year', this.state.year);
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

  _setSelection(year, tourney) {
    const type = find(tourneys, {id: tourney}).key;
    this.setState((prevState, props) => {
      prevState.year = year;
      prevState.tourney = tourney;
      prevState.tt = find(this.state.data, {year: year})[type].teetimes;
      prevState.lb = find(this.state.data, {year: year})[type].leaderboard;
      return prevState;
    });
  }

  // TODO: separate components, plz
  _renderHdr(label) {
    const options = years.map(y => {

      let tourneyOptions = tourneys.map(t => (
        <MenuOption
          onSelect={() => this._setSelection(y, t.id)}
          text={t.label}
          key={y + '_' + t.id}
        />
      ));

      return (
        <View style={styles.yearOptionsContainer} key={y}>
        <Text style={styles.yearOptionsText}>{y}</Text>
        {tourneyOptions}
        <View style={{borderBottomColor: '#999',borderBottomWidth:1}} />
        </View>
      );
    });

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
              {options}
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
  yearOptionsContainer: {
    padding: 10
  },
  yearOptionsText: {
    fontWeight: 'bold'
  },
  optionsContainer: {
    width: '40%'
  }
});
