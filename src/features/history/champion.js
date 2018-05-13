import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';

import { fontSize } from 'common/styles/style';


export class Champion extends React.Component {

  render() {
    const { year, name, walker } = this.props;
    var w = walker ? "*" : "";

    return(
      <ListItem
        title={year + ' - ' + name + ' ' + w}
        hideChevron
      />
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
