import React from 'react';
import {
  Text,
  View
} from 'react-native';


export class ScheduleScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `Tournament Schedule`
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
        <View>
          <Text>Breakfast</Text>
        </View>
    );
  }
}
