import React, { useEffect, useState, } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';
import {
  green
} from 'common/styles/color';
import Champion from './champion';
import { baseUrl } from 'common/config';

const url = `${baseUrl}/champions`;



const Champions = props => {

  const [ data, setData ] = useState([]);

  useEffect(
    () => {
      const _fetchData = async () => {
        try {
          let response = await fetch(url);
          let responseJson = await response.json();
          setData(responseJson);
        } catch(error) {
          console.error(error);
        }
      };
      _fetchData();
    }, []
  );

  const _sort = (champions)  => {
    // sort descending, so (b-a)
    return champions.sort((a,b) => parseInt(b.year) - parseInt(a.year));
  }

  const _renderItem = ({ item }) => {
    return (
      <Champion
        year={item.year}
        name={item.name}
        walker={item.walker}
      />
    );
  }

  let title, sub, content;

  title = (
    <View style={styles.title}>
      <Text style={styles.titleText}>
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

  if( data && data.champions ) {
    //console.log('data', data);
    const champions = _sort(data.champions);

    content = (
      <View style={{flex: 1,}}>
        {sub}
        <FlatList
          data={champions}
          renderItem={_renderItem}
          style={styles.flatList}
          keyExtractor={champ => champ.year}
        />
      </View>
    );
  } else {
    content = (
      <ActivityIndicator />
    );
  }

  return (
    <View style={styles.container}>
      {title}
      {content}
    </View>
  );

};

export default Champions;


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
  flatList: {
    backgroundColor: 'white',
  },
  sub: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  subText: {
    marginTop: 10,
    backgroundColor: 'white',
    color: '#999',
    paddingBottom: 10,
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
