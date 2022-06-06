import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {green} from 'common/styles/color';
import {fontSize} from 'common/styles/style';
import LeaderboardStack from 'features/scoring/leaderboard_stack';
import PairingsStack from 'features/scoring/pairings_stack';
import ScheduleStack from 'features/schedule/schedule_stack';
import HistoryStack from 'features/history/history_stack';
import AboutStack from 'features/about/about_stack';

const TabIcon = ({type, name, color}) => {
  return (
    <Icon
      style={{width: 18, height: 18}}
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
      initialRouteName="LeaderboardStack"
      shifting={false}
      activeColor="#fff"
      inactiveColor="#aaa"
      barStyle={styles.tabbar}>
      <Tab.Screen
        name="LeaderboardStack"
        component={LeaderboardStack}
        options={{
          tabBarLabel: <Text style={styles.maintabslabel}>Scoring</Text>,
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name="format-list-bulleted"
              type="material-community"
            />
          ),
          tabBarColor: green,
        }}
      />
      <Tab.Screen
        name="PairingsStack"
        component={PairingsStack}
        options={{
          tabBarLabel: <Text style={styles.maintabslabel}>Pairings</Text>,
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name="account-multiple"
              type="material-community"
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleStack"
        component={ScheduleStack}
        options={{
          tabBarLabel: <Text style={styles.maintabslabel}>Schedule</Text>,
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name="calendar-clock"
              type="material-community"
            />
          ),
          tabBarColor: green,
        }}
      />
      <Tab.Screen
        name="HistoryStack"
        component={HistoryStack}
        options={{
          tabBarLabel: <Text style={styles.maintabslabel}>History</Text>,
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name="trophy"
              type="material-community"
            />
          ),
          tabBarColor: green,
        }}
      />
      <Tab.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          tabBarLabel: <Text style={styles.maintabslabel}>About</Text>,
          tabBarIcon: ({focused}) => (
            <TabIcon
              color={focused ? '#fff' : '#aaa'}
              name="help-circle"
              type="material-community"
            />
          ),
          tabBarColor: green,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsContainer;

const styles = StyleSheet.create({
  maintabslabel: {
    fontSize: fontSize - 4,
  },
  tabbar: {
    backgroundColor: green,
  },
});
