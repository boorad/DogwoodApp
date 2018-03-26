import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from 'common/header';
import { ScoresTees } from './scores_tees';
import { green } from 'common/styles/color';


export class TournamentScreen extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={[styles.container]}>
        <Header
          label="Tournament"
        />
        <ScoresTees
          type="tournament"
        />
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: green
  }
});
