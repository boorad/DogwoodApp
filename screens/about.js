import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/style';

export class AboutScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'About',
      icon: ({tintColor}) => (
        <Icon
          name="help-circle"
          size={20}
          color={tintColor}
        />
      )
    })
  };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Icon name="menu" size={24} color="#fff" onPress={() => navigate('DrawerOpen')} />
          <Image
            source={require('../img/dogwood-logo.png')}
            style={styles.headerLogo}
          />
          <Text style={[styles.headerText, styles.lbSelect]}>About</Text>
        </View>
      </View>
    );
  }
};
