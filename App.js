import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HomeScreen } from './screens/home';
import { LeaderboardScreen } from './screens/leaderboard';
import { ScheduleScreen } from './screens/schedule';


const Dogwood = StackNavigator({
  Home: { screen: HomeScreen },
  Leaderboard: { screen: LeaderboardScreen },
  Schedule: { screen: ScheduleScreen }
});

AppRegistry.registerComponent('Dogwood', () => Dogwood);
