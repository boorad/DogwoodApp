import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import {
  Router,
  Scene,
  Stack,
  Tabs
} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  green
} from 'common/styles/color';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';


import { createTabsReducer } from './TabsReducer';

import { TournamentScreen } from 'features/scoring/tournament';
import { QualifierScreen } from 'features/scoring/qualifier';
import { AmAmScreen } from 'features/scoring/am-am';
import { ScheduleScreen } from 'features/schedule/schedule';
import { ChampionsScreen } from 'features/history/champions';
import { AboutScreen } from 'features/about/about';



const TabIcon = ({name, color}) => {
  return (
    <Icon size={18} color={color} name={name} />
  );
};


class TabsContainer extends Component  {

  render() {
    return (
      <Router
        createReducer={createTabsReducer}
      >
        <Stack key='root'>
          <Scene
            key='main'
            hideNavBar
            panHandlers={null}
          >
            <Tabs
              key='main_tabs'
              inactiveTintColor='#ccc'
              inactiveBackgroundColor='#666'
              activeTintColor='white'
              activeBackgroundColor={green}
              labelStyle={styles.maintabslabel}
              allowFontScaling={false}
              tabBarStyle={styles.tabbar}
            >
              <Stack
                key='scoring_stack'
                tabBarLabel='Leaderboard'
                icon={() => <TabIcon color='white' name='lead-pencil'/>}
                initial
              >
                <Scene
                  key='tourney'
                  component={TournamentScreen}
                  hideNavBar
                />
                <Scene
                  key='am-am'
                  component={AmAmScreen}
                />
                <Scene
                  key='qualifier'
                  component={QualifierScreen}
                />
              </Stack>
              <Stack
                key='schedule_stack'
                tabBarLabel='Schedule'
                icon={() => <TabIcon color='white' name='calendar-clock'/>}
              >
                <Scene
                  key='schedule'
                  component={ScheduleScreen}
                  hideNavBar
                />
              </Stack>
              <Stack
                key='history_tabs'
                tabBarLabel='History'
                icon={() => <TabIcon color='white' name='trophy'/>}
              >
                <Scene
                  key='champions'
                  component={ChampionsScreen}
                  hideNavBar
                />
              </Stack>
              <Stack
                key='about_stack'
                tabBarLabel='About'
                icon={() => <TabIcon color='white' name='help-circle'/>}
              >
                <Scene
                  key='about'
                  component={AboutScreen}
                  icon={() => <TabIcon color={blue} name='message'/>}
                  hideNavBar
                />
              </Stack>
            </Tabs>
          </Scene>
        </Stack>
      </Router>
    );
  }
}

export default TabsContainer;


const styles = StyleSheet.create({
  maintabslabel: {
    fontSize: fontSize-3
  },
  tabbar: {
    backgroundColor: green
  }
});



// lock font sizes for better rendering
// https://githubcom/facebook/react-native/issues/2519
Text.defaultProps.allowFontScaling=false;
