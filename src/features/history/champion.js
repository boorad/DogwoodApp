import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { fontSize } from 'common/styles/style';


export class Champion extends React.Component {

  render() {
    const { i, year, name, walker } = this.props;
    var w = walker ? "*" : "";

    return(
      <View style={[styles.chRow]}>
        <Text style={[styles.chYear]}>{year}</Text>
        <Text style={[styles.chName]}>{name}{w}</Text>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  chRow: {
    flexDirection: 'row',
    flex: 8
  },
  chYear: {
    flex: 1,
    fontSize: fontSize+1,
    color: "#222",
    paddingLeft: 10
  },
  chName: {
    flex: 7,
    fontSize: fontSize+1,
    color: "#222",
    paddingLeft: 10
  }
});
