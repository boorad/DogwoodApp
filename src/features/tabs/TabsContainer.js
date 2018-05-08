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
  blue,
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
import { HistoryScreen } from 'features/history/history';
import { AboutScreen } from 'features/about/about';



const TabIcon = ({name, color}) => {
  return (
    <Icon
      style={{ width: 18, height: 18 }}
      size={18}
      color={color}
      name={name}
    />
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
              activeTintColor='#fff'
              activeBackgroundColor={green}
              labelStyle={styles.maintabslabel}
              allowFontScaling={false}
              tabBarStyle={styles.tabbar}
            >
              <Stack
                key='scoring_stack'
                tabBarLabel='Leaderboard'
                icon={() => <TabIcon color='#fff' name='lead-pencil'/>}
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
                icon={() => <TabIcon color='#fff' name='calendar-clock'/>}
              >
                <Scene
                  key='schedule'
                  component={ScheduleScreen}
                  hideNavBar
                />
              </Stack>
              <Stack
                key='history_stack'
                tabBarLabel='History'
                icon={() => <TabIcon color='#fff' name='trophy'/>}
              >
                <Scene
                  key='history'
                  component={HistoryScreen}
                  hideNavBar
                />
              </Stack>
              <Stack
                key='about_stack'
                tabBarLabel='About'
                icon={() => <TabIcon color='#fff' name='help-circle'/>}
              >
                <Scene
                  key='about'
                  component={AboutScreen}
                  icon={() => <TabIcon color='#fff' name='message'/>}
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
