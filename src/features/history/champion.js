import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import { fontSize } from 'common/styles/style';



const Champion = props => {

  const { year, name, walker } = props;
  var w = walker ? "*" : "";

  return(
    <ListItem>
      <ListItem.Title>{year + ' - ' + name + ' ' + w}</ListItem.Title>
    </ListItem>
  );

};

export default Champion;


const styles = StyleSheet.create({
  chRow: {
    flexDirection: 'row',
    flex: 8,
  },
  chYear: {
    flex: 1,
    fontSize: fontSize+1,
    color: "#222",
    paddingHorizontal: 10,
  },
  chName: {
    flex: 7,
    fontSize: fontSize+1,
    color: "#222",
    paddingHorizontal: 10,
  },
});
