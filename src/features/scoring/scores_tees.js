import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {filter, find, orderBy} from 'lodash';
import {fontFamily, fontSize} from 'common/styles/style';
import {parseISO, sub} from 'date-fns';

import GolfGenius from './golfgenius';
import Header from './header';
import {TournamentContext} from '../tournament/TournamentContext';

const ScoresTees = props => {
  const {page} = props;

  const [gg, setGG] = useState(<ActivityIndicator />);
  const [header, setHeader] = useState();

  const {tournament, selectedYear} = useContext(TournamentContext);

  const [data, setData] = useState([]);
  const [year, setYear] = useState();
  const [years, setYears] = useState([]);
  const [tourney, setTourney] = useState();
  const [tourneys, setTourneys] = useState();

  const parseTournament = t => {
    let ret = [];
    if (t?.years) {
      t.years.map(y => {
        if (y.scoring) {
          ret.push({
            year: y.year,
            ...y.scoring,
          });
        }
      });
    }
    return ret;
  };

  useEffect(() => {
    setData(parseTournament(tournament));
  }, [tournament]);

  const updateYear = y => {
    setYear(y);
  };

  const updateTourney = t => {
    setTourney(t);
  };

  useEffect(() => {
    // console.log('data', data);

    // set list of years
    const yrs = data.map(yr => yr.year);
    setYears(yrs);

    // set year
    setYear(selectedYear);
  }, [data, selectedYear]);

  useEffect(() => {
    // set tourneys
    const ty = find(data, {year});
    // console.log('ty', ty);

    if (ty) {
      const sortedEvents = orderBy(ty.events, ['date', 'asc']);

      setTourneys(sortedEvents);
      const now = new Date();
      const nextEvents = filter(
        sortedEvents,
        e => parseISO(e.date) > sub(now, {days: 1}),
      );
      if (nextEvents.length > 0) {
        setTourney(nextEvents[0].name);
      } else {
        // if we're past every date in events, show the last one
        setTourney(ty.events[sortedEvents.length - 1].name);
      }
    }
  }, [data, year]);

  useEffect(() => {
    if (tourneys) {
      setHeader(
        <Header
          data={data}
          year={year}
          years={years}
          updateYear={updateYear}
          tourney={tourney}
          tourneys={tourneys}
          updateTourney={updateTourney}
        />,
      );
    }
  }, [data, tourney, tourneys, year, years]);

  useEffect(() => {
    // console.log('selections:', {year, tourney});
    if (year && tourney) {
      const e = find(tourneys, {name: tourney});
      // console.log('e', e);
      if (e) {
        const gg_num = page === 'tt' ? e.teetimes : e.leaderboard;
        setGG(
          <View style={styles.gg}>
            <GolfGenius gg_num={gg_num} type={page} />
          </View>,
        );
      }
    }
  }, [year, tourney, data, page, tourneys]);

  return (
    <View style={styles.container}>
      {header}
      {gg}
    </View>
  );
};

export default ScoresTees;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hdr: {},
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
    color: '#eee',
    textAlign: 'center',
    fontSize: fontSize + 4,
    fontFamily: fontFamily,
    paddingTop: 10,
    paddingBottom: 10,
  },
  gg: {
    flex: 1,
  },
});
