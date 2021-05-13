import React, { useEffect, useState, } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
import { find } from 'lodash';
import fetch from 'node-fetch';
import moment from 'moment';

import GolfGenius from './golfgenius';
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

  const [ gg, setGG ] = useState(<ActivityIndicator />);

  const [ data, setData ] = useState([]);
  const [ year, setYear ] = useState();
  const [ years, setYears ] = useState([]);
  const [ tourney, setTourney ] = useState();

  const updateYear = y => {
    setYear(y);
  };

  const updateTourney = t => {
    setTourney(t);
  };

  // once we have data, set more state about years & tourneys
  useEffect(
    () => {
      const now = moment();
      let y = now.year();
      let current, qDate, aDate, tDate;

      // if we are before the qualifier date (midnight), show last year
      try {
        current = find(data, {year: y.toString()});
        qDate = moment(current.qualifier.date);
        if( now < qDate ) y = qDate.year() - 1;
      } catch(e) {}

      // because FUCK COVID
      if( y = 2020 ) y = 2019;

      //  if year not in data, set to most recent year
      const yrs = data.map(yr => yr.year);
      if( yrs.indexOf(y.toString()) < 0 ) {
        y = yrs.sort().reverse()[0];
      }
      setYear(y);
      setYears(yrs);

      let t = 't';

      // check dates to render proper tourney
      try {
        current = find(data, {year});
        qDate = (current && current.qualifier && current.qualifier.date)
          ? moment(current.qualifier.date)
          : null;
        aDate = (current && current['am-am'] && current['am-am'].date)
          ? moment(current['am-am'].date)
          : null;
        tDate = (current && current.tournament && current.tournament.date)
          ? moment(current.tournament.date)
          : null;
      } catch(e) {}

      if( qDate && now > qDate ) t = 'q';
      if( aDate && now > aDate ) t = 'a';
      if( tDate && now > tDate ) t = 't';

      //console.log('setting tourney', t);
      setTourney(t);

    }, [data]
  );

  useEffect(
    () => {
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
      _fetchData();
    }, []
  );

  useEffect(
    () => {
      console.log({year, tourney});
      if( year && tourney ) {
        const type = find(tourneys, {id: tourney}).key;
        const yr = find(data, {year: year.toString()});
        //console.log('yr', yr);
        if( yr ) {
          let tt, lb;
          if( yr[type] ) {
            tt = yr[type].teetimes;
            lb = yr[type].leaderboard;
          }
          const gg_num = (page === 'tt')
            ? tt
            : lb;
          setGG(
            <View style={styles.gg}>
              <GolfGenius
                gg_num={gg_num}
                type={page}
              />
            </View>
          );
        }
      }
    }, [year, tourney]
  );


  return (
    <View style={styles.container}>
      <Header
        data={data}
        year={year}
        years={years}
        updateYear={updateYear}
        tourney={tourney}
        tourneys={tourneys}
        updateTourney={updateTourney}
      />
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
});
