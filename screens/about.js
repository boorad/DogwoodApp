import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
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

  _sendToSourceCode() {
    var url = "https://github.com/boorad/DogwoodApp";
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render() {
    var { height, width } = Dimensions.get('window');
    var version = DeviceInfo.getVersion();

    bg_height = width * 0.56;

    return (
      <View style={[styles.container]}>
        <Header
          label="About"
          nav={this.props.navigation}
        />
        <ScrollView contentContainerStyle={{flex:1}}>
          <View style={styles.aboutContainer}>
            <Image
              source={require('../img/dogwood-logo.png')}
              style={styles.aboutDILogo}
            />
            <Text style={styles.aboutHosted}>Hosted by:</Text>
            <Image
              source={require('../img/dhgc-logo.jpg')}
              style={styles.aboutDHGCLogo}
            />
            <Text style={styles.aboutVersion}>App v{version}</Text>
            <TouchableOpacity onPress={this._sendToSourceCode}>
              <Text style={styles.aboutBy}>by Brad Anderson</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Image
          source={require('../img/eleven.png')}
          style={{
            width: width,
            height: bg_height,
            position: 'absolute',
            bottom: 0}}
        />
      </View>
    );
  }
};
