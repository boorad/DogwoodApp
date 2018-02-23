import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from 'common/header';
import { ScoresTees } from './scores_tees';
import { styles } from 'common/styles/style';



export class TournamentScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Tournament Scores & Tee Times',
      icon: ({tintColor}) => (
        <Icon
          name="monitor"
          size={20}
          color={tintColor}
        />
      )
    })
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={[styles.container]}>
        <Header
          label="Tournament"
          nav={this.props.navigation}
        />
        <ScoresTees
          type="tournament"
        />
      </View>
    );
  }

};
