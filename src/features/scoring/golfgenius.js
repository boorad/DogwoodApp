import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';



const GolfGenius = props => {

  const { gg_num } = props;

  const uri = `https://www.golfgenius.com/pages/${gg_num}?no_header=no_nav_bar&banner=false`;

  let content;

  if( gg_num && gg_num != '0' ) {
    content = (
      <WebView
        source={{uri}}
        originWhitelist={['*']}
        style={styles.gglb}
        scalesPageToFit={Platform.OS === 'android'}
      />
    );
  } else {
    content = (
      <View style={styles.na}>
        <Text style={styles.naText}>Event Not Currently Available</Text>
      </View>
    );
  }

  return content;

};

export default GolfGenius;


const styles = StyleSheet.create({
  gglb: {
    margin: 0,
    padding: 0,
    flex: 1,
  },
  na: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  naText: {
    color: 'white',
  },
});
