import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {
  Icon
 } from 'react-native-elements';
import {
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';

import {
  blue,
  green
} from 'common/styles/color';
import {
  fontFamily,
  fontSize
} from 'common/styles/style';
import LeaderboardScreen from 'features/scoring/leaderboard';
import PairingsScreen from 'features/scoring/pairings';
import ScheduleScreen from 'features/schedule/schedule';
import HistoryScreen from 'features/history/history';
import AboutScreen from 'features/about/about';



const TabIcon = ({type, name, color}) => {
  return (
    <Icon
      style={{ width: 18, height: 18 }}
      size={18}
      color={color}
      name={name}
      type={type}
    />
  );
};


const TabsContainer = () => {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='LeaderboardScreen'
      shifting={true}
      activeColor='#fff'
      inactiveColor='#aaa'
      barStyle={styles.tabbar}
      >
      <Tab.Screen
        name='LeaderboardScreen'
        component={LeaderboardScreen}
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name='format-list-bulleted'
              type='material-community'
            />
          ),
          tabBarColor: green,
        }}
      />
      <Tab.Screen
        name='PairingsScreen'
        component={PairingsScreen}
        options={{
          title: 'Pairings',
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name='account-multiple'
              type='material-community'
            />
          ),
        }}
      />
      <Tab.Screen
        name='ScheduleScreen'
        component={ScheduleScreen}
        options={{
          title: 'Schedule',
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name='calendar-clock'
              type='material-community'
            />
          ),
          tabBarColor: green,
        }}
      />
      <Tab.Screen
        name='HistoryScreen'
        component={HistoryScreen}
        options={{
          title: 'History',
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name='trophy'
              type='material-community'
            />
          ),
          tabBarColor: green,
        }}
      />
      <Tab.Screen
        name='AboutScreen'
        component={AboutScreen}
        options={{
          title: 'About',
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name='help-circle'
              type='material-community'
            />
          ),
          tabBarColor: green,
        }}
      />
    </Tab.Navigator>
  );

};

/*
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
              swipeEnabled={false}
            >
              <Stack
                key='scoring_stack'
                tabBarLabel='Leaderboard'
                icon={() => <TabIcon color='#fff' name='lead-pencil'/>}
                initial
              >
                <Scene
                  key='leaderboard'
                  component={LeaderboardScreen}
                  hideNavBar
                />
              </Stack>
              <Stack
                key='pairings_stack'
                tabBarLabel='Pairings'
                icon={() => <TabIcon color='#fff' name='account-multiple'/>}
              >
                <Scene
                  key='pairings'
                  component={PairingsScreen}
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
            </Tabs>
          </Scene>
        </Stack>
      </Router>
    );
  }
*/

export default TabsContainer;


const styles = StyleSheet.create({
  maintabslabel: {
    fontSize: fontSize-3
  },
  tabbar: {
    backgroundColor: green
  }
});
