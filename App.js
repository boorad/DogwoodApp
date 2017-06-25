import React from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { TournamentScreen } from './screens/tournament';
import { QualifierScreen } from './screens/qualifier';
import { AmAmScreen } from './screens/am-am';
import { ScheduleScreen } from './screens/schedule';
import { ChampionsScreen } from './screens/champions';
import { AboutScreen } from './screens/about';

import { styles } from './styles/style';


const routeConfig = {
  Tournament: {
    path: '/tournament',
    screen: TournamentScreen
  },
  Qualifier: {
    path: '/qualifier',
    screen: QualifierScreen
  },
  AmAm: {
    path: '/amam',
    screen: AmAmScreen
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
  drawerWidth: 320,
  contentOptions: {
    style: styles.drawer,
    activeTintColor: '#eee',
    activeBackgroundColor: '#666',
    inactiveTintColor: '#eee',
    inactiveBackgroundColor: '#000'
  },
  initialRouteName: 'Tournament'
};

const Dogwood = DrawerNavigator(routeConfig, drawerNavigatorConfig);
AppRegistry.registerComponent('Dogwood', () => Dogwood);
