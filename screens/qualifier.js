import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from './header';
import { ScoresTees } from './scores_tees';
import { styles } from '../styles/style';



export class QualifierScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Qualifier Scores & Tee Times',
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
          label="Qualifier"
          nav={this.props.navigation}
        />
        <ScoresTees
          type="qualifier"
        />
      </View>
    );
  }

};
