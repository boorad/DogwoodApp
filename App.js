import React from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { LeaderboardScreen } from './screens/leaderboard';
import { ScheduleScreen } from './screens/schedule';


const Dogwood = DrawerNavigator({
  Leaderboard: {
    path: '/leaderboard',
    screen: LeaderboardScreen
  },
  Schedule: {
    path: '/schedule',
    screen: ScheduleScreen
  }
}, {
  initialRouteName: 'Leaderboard'
});

AppRegistry.registerComponent('Dogwood', () => Dogwood);
