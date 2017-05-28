import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/style';


export class Header extends React.Component {

  render() {
    const { label, nav } = this.props;
    const { navigate } = nav;

    return (
      <View style={styles.header}>
        <Icon
          name="menu"
          size={30}
          color="#fff"
          onPress={() => navigate('DrawerOpen')}
        />
        <Image
          source={require('../img/dogwood-logo.png')}
          style={styles.headerLogo}
        />
        <Text style={[styles.headerText, styles.lbSelect]}>{label}</Text>
      </View>
    );
  }

};
