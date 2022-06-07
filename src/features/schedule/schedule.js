import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {fontFamily, fontSize} from 'common/styles/style';
import {format, parse, parseISO} from 'date-fns';
import {headerColor, primaryColor} from 'common/styles/color';

import Day from 'features/schedule/day';
import Header from 'common/header';
import {TournamentContext} from '../tournament/TournamentContext';
import {groupBy} from 'lodash';

const ScheduleScreen = props => {
  const {selectedTournamentYear, selectedYear} = useContext(TournamentContext);

  // console.log('schedule', selectedTournamentYear?.events);

  const _renderTab = (
    name,
    page,
    isTabActive,
    onPressHandler,
    onLayoutHandler,
  ) => {
    var st = [styles.tab, styles.schTab];
    if (isTabActive) {
      st.push(styles.activeTab);
    }

    return (
      <TouchableHighlight
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={st}>
        <Text style={[styles.schTab, styles.tabText]}>{name}</Text>
      </TouchableHighlight>
    );
  };

  let title, content;
  const tabBarPosition = Platform.OS === 'ios' ? 'bottom' : 'top';

  if (selectedTournamentYear?.events) {
    const groupedByDate = groupBy(selectedTournamentYear.events, event => {
      if (!event) {
        return null;
      }
      const date = parse(event.start, 'yyyy-MM-dd HH:mm', new Date());
      return format(date, 'yyyy-MM-dd');
    });
    const dates = Object.keys(groupedByDate);
    const sortedDates = dates.sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime(),
    );
    // console.log('sortedDates', sortedDates);

    title = (
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {selectedYear} Dogwood Invitational Week
        </Text>
      </View>
    );
    content = (
      <ScrollableTabView
        initialPage={0}
        tabBarPosition={tabBarPosition}
        renderTabBar={() => (
          <ScrollableTabBar
            style={styles.tabContainer}
            underlineStyle={styles.activeTabUnderline}
            renderTab={_renderTab}
          />
        )}
        style={styles.tabView}>
        {sortedDates.map((date, i) => {
          const eventsForDate = groupedByDate[date];
          const sortedEvents = eventsForDate.sort((a, b) => {
            if (!a || !b) {
              return 0;
            }
            return new Date(a.start).getTime() - new Date(b.start).getTime();
          });
          const dow = format(parseISO(date), 'eee');
          const shortdate = format(parseISO(date), 'M/d');
          const label = dow + '\n' + shortdate;
          const day = {
            dow,
            shortdate,
            events: sortedEvents,
          };
          return <Day tabLabel={label} i={i} key={i} day={day} />;
        })}
      </ScrollableTabView>
    );
  } else {
    title = (
      <View style={styles.title}>
        <Text style={styles.titleText}>Dogwood Invitational Week</Text>
      </View>
    );
    content = <ActivityIndicator />;
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
    flex: 1,
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: fontSize + 3,
    fontFamily: fontFamily,
    color: headerColor,
  },
  tabView: {
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: primaryColor,
    backgroundColor: primaryColor,
  },
  activeTab: {
    backgroundColor: '#00b0d6',
    borderColor: 'yellow',
    borderBottomWidth: 4,
  },
  activeTabUnderline: {
    backgroundColor: 'yellow',
  },
  tabContainer: {
    //backgroundColor: primaryColor,
    height: 50,
  },
  schTab: {
    width: 50,
    minWidth: 50,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 49,
  },
  tabText: {
    color: '#eee',
    textAlign: 'center',
    fontSize: fontSize - 2,
    fontFamily: fontFamily,
  },
});
