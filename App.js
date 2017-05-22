import React from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

//import { LeaderboardScreen } from './screens/leaderboard';
import { LeaderboardScreen } from './screens/leaderboard_golfgenius';
import { ScheduleScreen } from './screens/schedule';
import { ChampionsScreen } from './screens/champions';
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
  Champions: {
    path: '/champions',
    screen: ChampionsScreen
  },
  About: {
    path: '/about',
    screen: AboutScreen
  }
};

const drawerNavigatorConfig = {
  drawerWidth: 200,
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
