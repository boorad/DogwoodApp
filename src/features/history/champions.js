import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {fontFamily, fontSize} from 'common/styles/style';

import Champion from './champion';
import {GET_CHAMPIONS_QUERY} from 'features/history/graphql';
import {TournamentContext} from '../tournament/TournamentContext';
import {green} from 'common/styles/color';
import {orderBy} from 'lodash';
import {useQuery} from '@apollo/client';

const Champions = props => {
  const [content, setContent] = useState(<ActivityIndicator />);
  const {tournament} = useContext(TournamentContext);
  const tkey = tournament._key;

  const {data} = useQuery(GET_CHAMPIONS_QUERY, {
    variables: {
      tkey,
    },
  });

  const _renderItem = ({item}) => {
    return (
      <Champion
        year={item.year}
        name={`${item.firstName} ${item.lastName}`}
        walker={item.walkerCup === true}
      />
    );
  };

  const title = (
    <View style={styles.title}>
      <Text style={styles.titleText}>Dogwood Champions</Text>
    </View>
  );

  const sub = (
    <View style={styles.sub}>
      <Text style={styles.subText}>* denotes Walker Cup team member</Text>
    </View>
  );

  useEffect(() => {
    if (data && data.champions) {
      // console.log('data', data);
      const champions = orderBy(data.champions, ['year'], ['desc']);

      setContent(
        <View style={styles.subContainer}>
          {sub}
          <FlatList
            data={champions}
            renderItem={_renderItem}
            style={styles.flatList}
            keyExtractor={champ => champ.year}
          />
        </View>,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: fontSize + 4,
    fontFamily: fontFamily,
    color: 'white',
  },
  flatList: {
    backgroundColor: 'white',
  },
  sub: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  subText: {
    marginTop: 10,
    backgroundColor: 'white',
    color: '#999',
    paddingBottom: 10,
  },
  chSubTitle: {
    fontSize: fontSize - 2,
    fontFamily: fontFamily,
    color: '#222',
    flex: 7,
    paddingLeft: 10,
  },
  chRow: {
    flexDirection: 'row',
    flex: 8,
  },
  chYear: {
    flex: 1,
    fontSize: fontSize + 1,
    color: '#222',
    paddingLeft: 10,
  },
  chName: {
    flex: 7,
    fontSize: fontSize + 1,
    color: '#222',
    paddingLeft: 10,
  },
});
