import React, { useEffect, useState, } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';
import { baseUrl } from 'common/config';



const Alumni = props => {

  const [ data, setData ] = useState([]);
  const url = `${baseUrl}/alumni?cache=1`;

  const trophy = (
    <Icon name='trophy' size={24} color={'#666'}/>
  );

  const blank = (
    <Icon name='checkbox-blank' size={24} color={'#fff'} />
  );

  useEffect(
    () => {
      const _fetchData = async () => {
        try {
          let response = await fetch(url);
          let data = await response.json();
          setData(data);
        } catch(error) {
          console.error(error);
        }
      };
      _fetchData();
    }, []
  );

  const _itemPressed = (item) => {
    if( !item || !item.uri ) return;
    const url = `https://www.pgatour.com/${item.uri}`;
    Linking.openURL(url);
  }

  const _renderItem = ({ item }) => {
    if( !item.dogwood ) return null;
    const champIcon = item.dogwood_champ ? trophy : blank;

    return (
      <ListItem
        containerStyle={styles.containerStyle}
        onPress={() => _itemPressed(item)}
      >
        {champIcon}
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>{item.rank + ' - ' + item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  }

  const title = (
    <View style={styles.title}>
      <Text style={styles.titleText}>
        Dogwood Alumni
      </Text>
      <Text style={styles.subTitleText}>
        Official World Golf Rankings
      </Text>
    </View>
  );

  let content;
  if( data && data.players ) {
    let count = data.players.length;
    let dt = moment(data.date).format('ll');
    content = (
      <View style={{flex: 1,}}>
        <View style={styles.stats}>
          <Text style={styles.statsTxt}>as of {dt}</Text>
          <Text style={styles.statsTxt}>{count} of Top 1,000</Text>
        </View>
        <FlatList
          data={data.players}
          renderItem={_renderItem}
          style={styles.flatList}
          keyExtractor={item => item.rank}
        />
      </View>
    );
  } else {
    content = (<ActivityIndicator />);
  }

  return (
    <View style={styles.container}>
      {title}
      {content}
    </View>
  );

};

export default Alumni;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 7,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    color: 'white',
  },
  subTitleText: {
    fontSize: fontSize,
    fontFamily: fontFamily,
    color: 'white',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  statsTxt: {
    color: 'white',
    fontSize: fontSize - 2,
  },
  flatList: {
    backgroundColor: 'white',
  },
  listItemTitle: {
    color: '#333',
  },
});
