import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { List } from 'react-native-elements';

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

import { baseUrl } from 'common/config';


const url = `${baseUrl}/champions`;

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

  _renderItem( { item } ) {
    return (
      <Champion
        year={item.year}
        name={item.name}
        walker={item.walker}
      />
    );
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
      <View style={styles.sub}>
        <Text style={styles.subText}>
          * denotes Walker Cup team member
        </Text>
      </View>
    );

    if( this.state && this.state.data ) {
      var champions = this.state.data;
      champions = this._sort(champions);

      content = (
        <View style={styles.scroll}>
          {sub}
          <List style={styles.list}>
            <FlatList
              data={champions}
              renderItem={this._renderItem}
              keyExtractor={champ => champ.year}
            />
          </List>
        </View>
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
  sub: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  subText: {
    marginTop: 10,
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
