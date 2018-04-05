import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';

import {
  headerColor,
  primaryColor,
  green
} from 'common/styles/color';

import { Champion } from './champion';


const url = "https://api.druid.golf/dogwood/champions";

export class Champions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
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
        <ScrollView style={styles.scroll}>
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
      <View style={styles.container}>
        {title}
        {content}
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: green,
    flex: 1
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  titleText: {
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    color: 'white'
  },
  scroll: {
    backgroundColor: 'white'
  },
  chSubTitle: {
    fontSize: fontSize-2,
    fontFamily: fontFamily,
    color: "#222",
    flex: 7,
    paddingLeft: 10
  },
  chRow: {
    flexDirection: 'row',
    flex: 8
  },
  chYear: {
    flex: 1,
    fontSize: fontSize+1,
    color: "#222",
    paddingLeft: 10
  },
  chName: {
    flex: 7,
    fontSize: fontSize+1,
    color: "#222",
    paddingLeft: 10
  }
});
