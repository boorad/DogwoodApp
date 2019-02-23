import React from 'react';
import {
  ActivityIndicator,
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
import moment from 'moment';

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

const tourneys = [
  {id: 'q', key: 'qualifier', label:'Qualifier'},
  {id: 'a', key: 'am-am', label:'Am-Am'},
  {id: 't', key: 'tournament', label:'Tournament'}
];



export class ScoresTees extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      years: [],
      data: [],
      year: null,
      tourney: null
    };

    this._initialYear = this._initialYear.bind(this);
    this._initialTourney = this._initialTourney.bind(this);
  }

  _initialYear(data) {
    const now = moment();
    let y = now.year();

    // if we are before the qualifier date (midnight), show last year
    try {
      const current = find(data, {year: y.toString()});
      const qDate = moment(current.qualifier.date);
      if( now < qDate ) y = qDate.year() - 1;
    } catch(e) {}

    //  if year not in data, set to most recent year
    const yrs = data.map(yr => yr.year);
    if( yrs.indexOf(y.toString()) < 0 ) {
      y = yrs.sort().reverse()[0];
    }

    // update state
    this.setState({
      year: y.toString(),
      years: yrs
    });
  }

  _initialTourney(data) {

    let t = 't';

    // check dates to render proper tourney
    const current = find(data, {year: this.state.year});
    const now = moment();
    const qDate = moment(current.qualifier.date);
    const aDate = moment(current['am-am'].date);
    const tDate = moment(current.tournament.date);

    if( now > qDate ) t = 'q';
    if( now > aDate ) t = 'a';
    if( now > tDate ) t = 't';

    // update state
    this.setState({
      tourney: t
    });

  }

  async _fetchData() {
    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    let myInit = {
      method: 'GET',
      headers: myHeaders
    };

    try {
      let response = await fetch(url, myInit);
      let responseJson = await response.json();
      this._updateData(responseJson);
    } catch(error) {} // TODO: implement Error component

  }

  _updateData(data) {
    this._initialYear(data);
    this._initialTourney(data);
    const type = find(tourneys, {id: this.state.tourney}).key;
    this.setState((prevState, props) => {
      prevState.data = data;
      prevState.tt = find(data, {year: this.state.year})[type].teetimes;
      prevState.lb = find(data, {year: this.state.year})[type].leaderboard;
      return prevState;
    });
  }

  componentDidMount() {
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
    const options = this.state.years.sort().reverse().map(y => {

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

      const gg_num = this.props.page === 'tt' ? this.state.tt : this.state.lb;
      gg = (
        <View style={styles.gg}>
          <GolfGenius
            gg_num={gg_num}
            type={this.props.page}
          />
        </View>
      );
    } else {
      gg = (
        <ActivityIndicator />
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
