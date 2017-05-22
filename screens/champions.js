import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Champion } from './champion';
import { styles } from '../styles/style';

const url = "https://api.druid.golf/dogwood/champions";


export class ChampionsScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Champions',
      icon: ({tintColor}) => (
        <Icon
          name="trophy"
          size={20}
          color={tintColor}
        />
      )
    })
  };

  constructor(props) {
    super(props);
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
      prevState.data = data.champions;
      return prevState;
    });
  }

  componentWillMount() {
    this._fetchData();
  }

  _sort(champions) {
    // sort descending, so (b-a)
    return champions.sort((a,b) => parseInt(b.year) - parseInt(a.year));
  }

  render() {
    const { navigate } = this.props.navigation;
    var title, sub, content;

    title = (
      <View style={[styles.title]}>
        <Text style={[styles.titleText]}>
          Dogwood Champions
        </Text>
      </View>
    );

    sub = (
      <View style={[styles.chRow]}>
        <Text style={[styles.chYear]}> </Text>
        <Text style={[styles.chSubTitle]}>
          * denotes Walker Cup team member
        </Text>
      </View>
    );

    if( this.state && this.state.data ) {
      var champions = this.state.data;
      champions = this._sort(champions);

      content = (
        <ScrollView>
          {sub}
          {champions.map((champ, i) => {
             return (
               <Champion
                 year={champ.year}
                 name={champ.name}
                 walker={champ.walker}
                 i={i}
                 key={i}
               />);
           })}
        </ScrollView>
      );
    } else {
      content = (
        <Text>Loading...</Text>
      );
    }

    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Icon name="menu"
            size={30}
            color="#fff"
            onPress={() => navigate('DrawerOpen')} />
          <Image
            source={require('../img/dogwood-logo.png')}
            style={styles.headerLogo}
          />
          <Text style={[styles.headerText, styles.lbSelect]}>Champions</Text>
        </View>
        {title}
        {content}
      </View>
    );
  }

};
