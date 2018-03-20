import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from 'common/styles/style';


export class Header extends React.Component {

  render() {
    const { label } = this.props;

    return (
      <View style={styles.header}>
        <Image
          source={require('common/img/dogwood-logo.png')}
          style={styles.headerLogo}
        />
        <Text style={[styles.headerText, styles.lbSelect]}>{label}</Text>
      </View>
    );
  }

};
