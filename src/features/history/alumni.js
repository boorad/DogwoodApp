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

    let title, content;

    title = (
      <View style={[styles.title]}>
        <Text style={[styles.titleText]}>
          PGA Alumni
        </Text>
      </View>
    );

    return (
      <View style={styles.container}>
        {title}
        {content}
      </View>
    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  titleText: {
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    color: 'white'
  }
});
