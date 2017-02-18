import React from 'react';
import {
  Text,
  View
} from 'react-native';


export class LeaderboardScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `Leaderboard`
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
        <View>
          <Text>Leaderboard</Text>
        </View>
    );
  }
}
