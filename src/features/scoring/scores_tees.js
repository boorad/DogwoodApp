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
import Header from './header';

const url = `${baseUrl}/golfgenius`;

const tourneys = [
  {id: 'q', key: 'qualifier', label:'Qualifier'},
  {id: 'a', key: 'am-am', label:'Am-Am'},
  {id: 't', key: 'tournament', label:'Tournament'}
];



const ScoresTees = props => {

  const { page } = props;

  const [ data, setData ] = useState([]);
  const [ year, setYear ] = useState();
  const [ tourney, setTourney ] = useState();

  let tt, lb, type;


  const updateYear = y => {
    setYear(y);
  };

/*
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
    setTourney(t);
  };
*/

  const updateTourney = t => {
    setTourney(t);
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
      //console.log('scores_tees data', responseJson);
      setData(responseJson);
    } catch(error) {} // TODO: implement Error component

  }

  const _updateData = async (data) => {
    setData(responseJson);
    await _initialYear(data);
    await _initialTourney(data);
  };

  const _setSelection = async (year, tourney) => {
    const type = find(tourneys, {id: tourney}).key;
    setYear(year);
    setTourney(tourney);
  }

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

  try {
    tt = find(data, {year})[type].teetimes;
    console.log('tt', tt);
    lb = find(data, {year})[type].leaderboard;
    console.log('lb', lb);
  } catch(e) {}

  hdr = (
    <Header
      data={data}
      updateYear={updateYear}
      updateTourney={updateTourney}
    />
  );

  if( tt && lb && tourney && year) {

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
