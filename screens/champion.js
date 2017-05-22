import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { styles } from '../styles/style';


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
