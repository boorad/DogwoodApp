import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import { styles } from 'common/styles/style';


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
