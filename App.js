import React from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Text>Welcome to The 2017 Dogwood Invitational</Text>
          <Button
            onPress={() => navigate('Leaderboard', {})}
            title="Leaderboard"
          />
          <Button
            onPress={() => navigate('Today', {})}
            title="Today's Schedule"
          />
        </View>
    );
  }
}

class LeaderboardScreen extends React.Component {
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

class TodayScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `Today's Activities`
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

const Dogwood = StackNavigator({
  Home: { screen: HomeScreen },
  Leaderboard: { screen: LeaderboardScreen },
  Today: { screen: TodayScreen }
});

AppRegistry.registerComponent('Dogwood', () => Dogwood);
