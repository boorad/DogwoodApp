import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ifIphoneX } from 'react-native-iphone-x-helper';


const paddingTopIphoneX = ifIphoneX(14, 0);
const paddingTopiOS = Platform.OS  === 'ios' ? 20 : 0;

export class Header extends React.Component {

  render() {
    const { label } = this.props;

    return (
      <View style={styles.header} />
    );
  }

};


const styles = StyleSheet.create({
  header: {
    paddingTop: paddingTopiOS + paddingTopIphoneX,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
