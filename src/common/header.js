import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = props => {
  const {label} = props;

  return <View style={styles.header} />;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
