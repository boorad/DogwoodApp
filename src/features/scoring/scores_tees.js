import React, { useEffect, useState, } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
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

import GolfGenius from './golfgenius';
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



const ScoresTees = props => {

  const { page } = props;

  const [ years, setYears ] = useState([]);
  const [ data, setData ] = useState([]);
  const [ year, setYear ] = useState();
  const [ tourney, setTourney ] = useState();

  let tt, lb, type;

  const _initialYear = async (data) => {
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
    await setYear(y.toString());
    await setYears(yrs);
  };

  const _initialTourney = async (data) => {

    let t = 't';

    // check dates to render proper tourney
    const current = find(data, {year});
    const now = moment();
    const qDate = moment(current.qualifier.date);
    const aDate = moment(current['am-am'].date);
    const tDate = moment(current.tournament.date);

    if( now > qDate ) t = 'q';
    if( now > aDate ) t = 'a';
    if( now > tDate ) t = 't';

    // update state
    await setTourney(t);
  };

  const _fetchData = async () => {
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
      await _updateData(responseJson);
    } catch(error) {} // TODO: implement Error component

  }

  const _updateData = async (data) => {
    await setData(responseJson);
    await _initialYear(data);
    await _initialTourney(data);
    tt = find(data, {year})[type].teetimes;
    lb = find(data, {year})[type].leaderboard;

  };

  const _setSelection = async (year, tourney) => {
    const type = find(tourneys, {id: tourney}).key;
    await setYear(year);
    await setTourney(tourney);
    tt = find(data, {year: year})[type].teetimes;
    lb = find(data, {year: year})[type].leaderboard;
  }

  // TODO: separate components, plz
  const _renderHdr = (label) => {
    const options = years.sort().reverse().map(y => {

      let tourneyOptions = tourneys.map(t => (
        <MenuOption
          onSelect={() => _setSelection(y, t.id)}
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
  };

  useEffect(
    () => {
    _fetchData();
    }, []
  );


  if( tourney && tourneys ) {
    type = find(tourneys, {id: tourney}).key;
  }

  let hdr = null;
  let gg = null;

  if( tt !== undefined &&
      lb !== undefined &&
      tourney &&
      year) {
    let label = find(tourneys, {id: tourney}).label;
    hdr = _renderHdr(year + ' ' + label);

    const gg_num = page === 'tt' ? tt : lb;
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

};

export default ScoresTees;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hdr: {
  },
  hdrLabel: {
    alignItems: 'center',
  },
  hdrMore: {
    position: 'absolute',
    right: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  hdrLabelText: {
    color: "#eee",
    textAlign: 'center',
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    paddingTop: 10,
    paddingBottom: 10,
  },
  gg: {
    flex: 1,
  },
  yearOptionsContainer: {
    padding: 10,
  },
  yearOptionsText: {
    fontWeight: 'bold',
  },
  optionsContainer: {
    width: '40%',
  },
});
