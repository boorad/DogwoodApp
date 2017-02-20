import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/style';

export class ScheduleScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Schedule'
    })
  };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Icon name="menu" size={24} color="#fff" onPress={() => navigate('DrawerOpen')} />
          <Text style={[styles.headerText, styles.lbSelect]}>Schedule</Text>
        </View>
      </View>
    );
  }
};
