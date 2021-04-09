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
    <ListItem containerStyle={styles.containerStyle}>
      <ListItem.Content>
        <ListItem.Title>{year + ' - ' + name + ' ' + w}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

};

export default Champion;


const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 7,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
