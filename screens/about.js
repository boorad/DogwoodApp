import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';

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
    var { height, width } = Dimensions.get('window');
    var version = DeviceInfo.getReadableVersion();

    bg_height = width * 0.56;

    return (
      <View style={[styles.container]}>
        <Header
          label="About"
          nav={this.props.navigation}
        />
        <View style={styles.aboutContainer}>
          <Image
            source={require('../img/dogwood-logo.png')}
            style={styles.aboutDILogo}
          />
          <Text style={styles.aboutBy}>Hosted by:</Text>
          <Image
            source={require('../img/dhgc-logo.jpg')}
            style={styles.aboutDHGCLogo}
          />
          <Text style={styles.aboutBy}>App v{version}</Text>
          <Text style={styles.aboutBy}>by Brad Anderson</Text>
          <Image
            source={require('../img/eleven.png')}
            style={{
              width: width,
              height: bg_height,
              position: 'absolute',
              bottom: 0}}
          />
        </View>
      </View>
    );
  }
};
