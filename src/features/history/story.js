import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';


export class Story extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Dogwood History</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
