import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from './header';
import { ScoresTees } from './scores_tees';
import { styles } from '../styles/style';



export class AmAmScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Am-Am Scores & Tee Times',
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
  }


  render() {
    return (
      <View style={[styles.container]}>
        <Header
          label="Dogwood Am-Am"
          nav={this.props.navigation}
        />
        <ScoresTees
          type="am-am"
        />
      </View>
    );
  }

};
