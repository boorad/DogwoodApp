import {ActivityIndicator, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {GET_TOURNAMENT_QUERY} from 'features/tournament/graphql';
import {TournamentContext} from 'features/tournament/TournamentContext';
import {currentYear} from 'common/datetime';
import {find} from 'lodash';
import {useQuery} from '@apollo/client';

const TournamentProvider = ({slug, children}) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [selectedTournamentYear, setSelectedTournamentYear] = useState(null);
  const [years, setYears] = useState([]);
  const [yearToKeyMap, setYearToKeyMap] = useState([]);

  const cy = currentYear();

  const {data, loading, error} = useQuery(GET_TOURNAMENT_QUERY, {
    variables: {
      slug,
    },
  });

  useEffect(() => {
    if (data) {
      // console.log('TournamentProvider data', data);
      const tournamentYears = data.tournament?.years;
      setTournament(data?.tournament);

      let lYearToKeyMap = {};
      const yearNames = tournamentYears?.map(ty => {
        if (!ty) {
          return;
        }
        if (!lYearToKeyMap[ty.year]) {
          lYearToKeyMap[ty.year] = ty._key;
        }
        return JSON.stringify(ty.year);
      });
      yearNames?.sort().reverse();
      // console.log('yearNames', yearNames);
      const cty = find(tournamentYears, {year: cy});
      // console.log('ct', ct);

      setYears(yearNames);
      setSelectedYear(cy);
      setSelectedTournamentYear(cty);
      setYearToKeyMap(lYearToKeyMap);
    }
  }, [cy, data]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>error: {error.message}</Text>;
  }

  return (
    <TournamentContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
        tournament,
        setTournament,
        selectedTournamentYear,
        setSelectedTournamentYear,
        years,
        setYears,
        yearToKeyMap,
        setYearToKeyMap,
      }}>
      {children}
    </TournamentContext.Provider>
  );
};

export default TournamentProvider;
