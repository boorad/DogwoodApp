import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';


class Event extends React.Component {
  render() {
    const { i, event } = this.props;
    return (
      <View key={i} style={styles.eventContainer}>
        <View style={styles.eventRow}>
          <Text style={styles.eventStart}>{event.start}</Text>
          <Text style={styles.eventEnd}  >{event.end}</Text>
          <Text style={styles.eventDescr}>{event.descr}</Text>
        </View>
        <View style={styles.eventRow}>
          <Text style={styles.eventBlank}></Text>
          <Text style={styles.eventNotes}>{event.notes}</Text>
        </View>
      </View>
    );
  }
}

export class Day extends React.Component {

  render() {
    const { i, day } = this.props;
    const label = day.dow + '\n' + day.shortdate;

    return (
      <ScrollView style={[styles.tabContent]}>
        <Text
          key={i}
          tablabel={label}
          style={[styles.tabContentTitle]}
        >
          {day.longdate}
        </Text>
        {day.events.map((event, i) => {
           return <Event key={i} event={event} />;
         })}
      </ScrollView>
    );
  }

};


const styles = StyleSheet.create({
  tabContent: {
    backgroundColor: "#fff"
  },
  tabContentTitle: {
    fontSize: fontSize+2,
    fontFamily: fontFamily,
    color: "#333",
    textAlign: "center",
    padding: 10
  },
  eventContainer: {
    padding: 5
  },
  eventRow: {
    flexDirection: 'row',
    flex: 6
  },
  eventStart: {
    flex: 1,
    paddingTop: 3,
    fontSize: fontSize-2
  },
  eventEnd: {
    flex: 1,
    paddingTop: 3,
    fontSize: fontSize-2
  },
  eventDescr: {
    flex: 4,
    fontSize: fontSize+1,
    fontWeight: 'bold'
  },
  eventBlank: {
    flex: 2
  },
  eventNotes: {
    flex: 4,
    fontSize: fontSize+1
  }
});
