import React, { useEffect, useState, } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';

import {
  headerColor,
  primaryColor
} from 'common/styles/color';

import Header from 'common/header';
import { baseUrl } from 'common/config';
import Day from './day';

const url = `${baseUrl}/schedule`;



const ScheduleScreen = props => {

  const [ schedule, setSchedule ] = useState();

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          let response = await fetch(url, {
            headers: {
              'Cache-Control': 'no-cache'
            }
          });
          let responseJson = await response.json();
          setSchedule(responseJson);
        } catch(error) {
          console.error(error);
        }
      };
      fetchData();
    }, []
  );

  const _renderTab = (name, page, isTabActive, onPressHandler, onLayoutHandler) => {
    var st = [styles.tab, styles.schTab];
    if( isTabActive ) st.push(styles.activeTab);

    return (
      <TouchableHighlight
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={st}
      >
        <Text style={[styles.schTab, styles.tabText]}>{name}</Text>
      </TouchableHighlight>
    );
  };

  let title, content;
  const tabBarPosition = Platform.OS  === 'ios' ? 'bottom' : 'top';

  if( schedule ) {
    const { year, days } = schedule;
    title = (
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {year} Dogwood Invitational Week
        </Text>
      </View>
    );
    content = (
      <ScrollableTabView
        initialPage={0}
        tabBarPosition={tabBarPosition}
        renderTabBar={ () =>
          <ScrollableTabBar
            style={styles.tabContainer}
            underlineStyle={{backgroundColor: "yellow"}}
            renderTab={_renderTab} />
        }
      >
        {days.map((day, i) => {
          const label = day.dow + '\n' + day.shortdate;
          return (
            <Day
              tabLabel={label}
              i={i}
              key={i}
              day={day}
            />);
          }
        )}
      </ScrollableTabView>
    );
  } else {
    title = (
      <View style={styles.title}>
        <Text style={styles.titleText}>Dogwood Invitational Week</Text>
      </View>
    );
    content = (
      <ActivityIndicator />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      {title}
      {content}
    </View>
  );

};

export default ScheduleScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    flex: 1
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  titleText: {
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    color: headerColor
  },
  tab: {
    flex: 1,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: primaryColor
  },
  activeTab: {
    backgroundColor: '#00b0d6',
    borderColor: "yellow",
    borderBottomWidth: 4
  },
  tabContainer: {
    //backgroundColor: primaryColor,
    height: 50
  },
  schTab: {
    width: 50,
    minWidth: 50
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 49
  },
  tabText: {
    color: "#eee",
    textAlign: 'center',
    fontSize: fontSize+2,
    fontFamily: fontFamily
  }
});
