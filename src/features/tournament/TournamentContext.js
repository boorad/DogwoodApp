import {createContext} from 'react';

export const TournamentContext = createContext({
  tournament: null,
  setTournament: t => {},
  tournamentYearKey: null,
  setTournamentYearKey: ty => {},
  years: [],
  setYears: years => [],
  selectedYear: null,
  setSelectedYear: y => y,
});
