import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from 'common/header';
import { ScoresTees } from './scores_tees';
import { styles } from 'common/styles/style';



export class QualifierScreen extends React.Component {

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
