import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from 'common/header';
import ScoresTees from './scores_tees';
import {green} from 'common/styles/color';

const LeaderboardScreen = props => {
  return (
    <View style={[styles.container]}>
      <Header />
      <ScoresTees page="lb" />
    </View>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: green,
  },
});
