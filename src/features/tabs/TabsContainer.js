import React, { Component } from 'react';
import { Text } from 'react-native';

import {
  Router,
  Scene,
  Stack,
  Tabs
} from 'react-native-router-flux';

import {
  tabActive,
  tabInactive,
  green,
  red,
  blue
} from 'common/styles/color';

import { createTabsReducer } from './TabsReducer';

import { TournamentScreen } from 'features/scoring/tournament';
import { QualifierScreen } from 'features/scoring/qualifier';
import { AmAmScreen } from 'features/scoring/am-am';
import { ScheduleScreen } from 'features/schedule/schedule';
import { ChampionsScreen } from 'features/history/champions';
import { AboutScreen } from 'features/about/about';

import { styles } from 'common/styles/style';


const TabIcon = ({name, color}) => {
  return (
    <Icon size={24} color={color} name={name} />
  );
};


class TabsContainer extends Component  {

  render() {
    return (
      <Router
        createReducer={createTabsReducer}
      >
        <Stack key='root'>
          <Scene key='main' hideNavBar panHandlers={null}>
            <Tabs
              key='main_tabs'
              inactiveTintColor={tabInactive}
              activeTintColor={tabInactive}
            >
      <Tabs
      key='scoring_tabs'
      tabBarLabel='Scoring'
      >
      <Scene
      key='tourney'
      component={TournamentScreen}
      />
      </Tabs>
      <Scene
      key='schedule'
      component={ScheduleScreen}
      icon={() => <TabIcon color={blue} name='message'/>}
      tabBarLabel='Schedule'
      hideNavBar
      />
      <Tabs
      key='history_tabs'
      tabBarLabel='History'
      >
      <Scene
      key='champions'
      component={ChampionsScreen}
      tabBarLabel='Champions'
      />
      </Tabs>
      <Scene
      key='about'
      component={AboutScreen}
      icon={() => <TabIcon color={blue} name='message'/>}
                tabBarLabel='About'
                hideNavBar
              />
            </Tabs>
          </Scene>
        </Stack>
      </Router>
    );
  }
}

export default TabsContainer;

/*


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

export default DrawerNavigator(routeConfig, drawerNavigatorConfig);
*/

// lock font sizes for better rendering
// https://githubcom/facebook/react-native/issues/2519
Text.defaultProps.allowFontScaling=false;
