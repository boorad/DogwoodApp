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


export class Alumni extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>PGA alumni</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
