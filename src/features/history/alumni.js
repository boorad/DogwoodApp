import React from 'react';
import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';
import { worldRankings } from './owgr.json';


const trophy = (
  <Icon name='trophy' size={24} color={'#666'}/>
);

const blank = (
  <Icon name='checkbox-blank' size={24} color={'#fff'} />
);



const Alumni = props => {

  const _itemPressed = (item) => {
    const id = item.id;
    const name = item.name.toLowerCase().replace(' ', '-');
    const url = `https://www.pgatour.com/players/player.${id}.${name}.html`;
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
        <ListItem.Title style={styles.listItemTitle}>{item.rank + ' - ' + item.name}</ListItem.Title>
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

  const content = (
    <View style={styles.scroll}>
      <FlatList
        data={worldRankings}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
      </View>
  );

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
  scroll: {
    backgroundColor: 'white',
    marginBottom: 80,
  },
  listItemTitle: {
    color: '#333',
  },
});
