import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from './header';
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
    return (
      <View style={[styles.container]}>
        <Header
          label="About"
          nav={this.props.navigation}
        />
      </View>
    );
  }
};
