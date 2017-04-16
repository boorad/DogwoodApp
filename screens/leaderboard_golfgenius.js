import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View,
  WebView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from '@drivetribe/react-native-orientation';

import { styles } from '../styles/style';


export class LeaderboardScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Leaderboard',
      icon: ({tintColor}) => (
        <Icon
          name="monitor"
          size={20}
          color={tintColor}
        />
      )
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      year: '2017',
      orientation: 'UNKNOWN'
    };

    this._updateOrientation = this._updateOrientation.bind(this);
  }

  _updateOrientation(or) {
    this.setState({ orientation: or });
  }

  componentWillMount() {
    this.setState({ orientation: Orientation.getInitialOrientation() });
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._updateOrientation);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._updateOrientation);
  }

  render() {
    const { navigate }= this.props.navigation;
    const { params } = this.props.navigation.state;
    var width = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="menu"
            size={24}
            color="#fff"
            onPress={() => navigate('DrawerOpen')} />
          <Image
            source={require('../img/dogwood-logo.png')}
            style={styles.headerLogo}
          />
          <Text style={[styles.headerText, styles.lbSelect]}>Leaderboard</Text>
        </View>
        <WebView
          source={{uri: 'http://druidgolf.com'}}
        />
      </View>
    );
  }
};
