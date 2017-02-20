import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/style';


export class LeaderboardScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Leaderboard'
    })
  };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const width = Dimensions.get('window').width;

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
          <Text style={[styles.headerText, styles.lbSelect]}>Round 4</Text>
        </View>
        <ScrollView>
          <Image
            source={require('../img/twelve.png')}
            style={{height: 175, width: width}}
            resizeMode='cover'
          />
        </ScrollView>
      </View>
    );
  }
};
