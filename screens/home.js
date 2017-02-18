import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';


export class HomeScreen extends React.Component {
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
      onPress={() => navigate('Schedule', {})}
      title="Tournament Schedule"
        />
        </View>
    );
  }
}
