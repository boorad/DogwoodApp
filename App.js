import React from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { LeaderboardScreen } from './screens/leaderboard';
import { ScheduleScreen } from './screens/schedule';
import { AboutScreen } from './screens/about';

import { styles } from './styles/style';


const routeConfig = {
  Leaderboard: {
    path: '/leaderboard',
    screen: LeaderboardScreen
  },
  Schedule: {
    path: '/schedule',
    screen: ScheduleScreen
  },
  About: {
    path: '/about',
    screen: AboutScreen
  }
};

const drawerNavigatorConfig = {
  drawerWidth: 180,
  contentOptions: {
    style: styles.drawer,
    activeTintColor: '#eee',
    activeBackgroundColor: '#666',
    inactiveTintColor: '#eee',
    inactiveBackgroundColor: '#000'
  },
  initialRouteName: 'Leaderboard'
};

const Dogwood = DrawerNavigator(routeConfig, drawerNavigatorConfig);
AppRegistry.registerComponent('Dogwood', () => Dogwood);
