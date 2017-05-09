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

const url = "https://api.druid.golf/dogwood/config";


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
      orientation: 'UNKNOWN'
    };

    this._updateOrientation = this._updateOrientation.bind(this);
  }

  _updateOrientation(or) {
    this.setState({ orientation: or });
  }

  async _fetchData() {
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      this._updateData(responseJson);
    } catch(error) {
      console.error(error);
    }

  }

  _updateData(data) {
    this.setState((prevState, props) => {
      prevState.year    = data.year;
      prevState.gg_page = data.gg_page;
      return prevState;
    });
  }

  componentWillMount() {
    this._fetchData();
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
    var { height, width } = Dimensions.get('window');
    height = height - 20;
    var content;

    if( this.state && this.state.gg_page ) {
      var iframe = "<iframe frameBorder='0' height='" + height + "' "
                 + "mozallowfullscreen "
                 + "name='page_iframe' scrolling='auto' "
                 + "src='https://www.golfgenius.com/pages/" + this.state.gg_page
                 + "?no_header=no_nav_bar&banner=false' webkitallowfullscreen='true' "
                 + "width='" + width + "'></iframe>";
      const html = `
<!DOCTYPE html>\n
<html>
  <head>
    <style type="text/css">
      body { margin: 0; padding: 0; }
    </style>
  </head>
  <body>
` + iframe + `
  </body>
</html>
`;
      content = (
        <WebView
          source={{html: html}}
          style={styles.gglb}
        />
      );
    } else {
      content = (
        <Text>Loading...</Text>
      );
    }

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
        {content}
      </View>
    );
  }
};
